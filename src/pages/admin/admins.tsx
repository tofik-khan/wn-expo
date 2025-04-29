import { useAdminsQuery } from "@/queries/admin"
import { Avatar, Chip, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export const PageAdmins = () => {
  const { data: admins, isLoading: isLoadingAdmins } = useAdminsQuery();

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
      field: "actions",
      headerName: "",
      flex: 3,
    },
  ];

  return (
    <>
      <Typography variant="h2">Admins:</Typography>
      <DataGrid
        loading={isLoadingAdmins}
        rows={admins.map((admin, index) => ({ ...admin, index }))}
        columns={columns}
        getRowId={(row) => row._id}
      />
    </>
  );
};