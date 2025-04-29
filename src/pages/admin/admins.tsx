import { useAdminMutation, useAdminsQuery } from "@/queries/admin";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, Button, Chip, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(timezone);
dayjs.extend(advancedFormat);

export const PageAdmins = () => {
  const { data: admins, isLoading: isLoadingAdmins } = useAdminsQuery();
  const theme = useTheme();
  const createAdmin = useAdminMutation();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const handleCreate = async () => {
    if (isAuthenticated) {
      const authToken = await getAccessTokenSilently();
      createAdmin.mutate({ authToken });
    }
  };

  const columns: GridColDef[] = [
    {
      field: "index",
      headerName: "#",
      renderCell: ({ row }) => row.index,
      width: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "name",
      headerName: "Name",
      renderCell: ({ row }) => (
        <Chip
          avatar={<Avatar alt={row.name} src={row.image} />}
          label={row.name}
          variant="outlined"
        />
      ),
      flex: 3,
    },
    {
      field: "email",
      headerName: "Email",
      renderCell: ({ row }) => row.email,
      flex: 4,
    },
    {
      field: "title",
      headerName: "Title",
      renderCell: ({ row }) => row.title,
      flex: 3,
    },
    {
      field: "isSuperuser",
      headerName: "Role",
      renderCell: ({ row }) =>
        row.isSuperuser ? (
          <Chip label={"Super User"} color="primary" />
        ) : (
          <Chip label={"Admin"} color="secondary" />
        ),
      flex: 2,
    },
    {
      field: "isAuthorized",
      headerName: "",
      renderCell: ({ row }) =>
        row.isAuthorized ? (
          <Chip label={"Authorized"} color="success" variant="outlined" />
        ) : (
          <Chip label={"Unauthorized"} color="error" variant="outlined" />
        ),
      flex: 2,
    },
    {
      field: "lastLogin",
      headerName: "Last Active",
      renderCell: ({ row }) =>
        row.lastLogin ? (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography color={theme.palette.grey[700]}>
              {dayjs(row.lastLogin).format("MM/DD/YYYY h:ma z")}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography color={theme.palette.grey[500]} fontStyle={"italic"}>
              never logged in
            </Typography>
          </Box>
        ),
      flex: 3,
    },
  ];

  return (
    <>
      <Typography variant="h2">Admins:</Typography>
      <Button onClick={handleCreate}>Create</Button>
      <DataGrid
        loading={isLoadingAdmins}
        rows={admins.map((admin, index) => ({ ...admin, index }))}
        columns={columns}
        getRowId={(row) => row._id}
      />
    </>
  );
};
