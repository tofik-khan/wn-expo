import { Add, Check, Close, Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGridPro, gridClasses, GridColDef } from "@mui/x-data-grid-pro";
import { useState } from "react";
import { CreateFAQDialog } from "./components/createFaqDialog";
import { useFaqQuery } from "@/queries/faq";
import { useAdminsQuery } from "@/queries/admin";
import { Faq } from "@/types/faq";
import dayjs from "dayjs";

export const PageFaqs = () => {
  const [openCreateFaqDialog, setOpenCreateFaqDialog] = useState(false);
  const {
    data: faqData,
    isLoading: isLoadingFaqData,
    isRefetching: isRefetchingFaqs,
  } = useFaqQuery();
  const { data: admins, isLoading: isLoadingAdmins } = useAdminsQuery();

  if (isLoadingFaqData || isLoadingAdmins)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "80vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  const columns: GridColDef[] = [
    {
      field: "index",
      headerName: "#",
      renderCell: ({ row }) => row.index + 1,
      width: 50,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "title",
      headerName: "Title",
      renderCell: ({ row }) => row.title,
      flex: 2,
    },
    {
      field: "body",
      headerName: "Body",
      renderCell: ({ row }) => row.bodyText,
      flex: 4,
    },
    {
      field: "created",
      headerName: "Created",
      renderCell: ({ row }: { row: Faq }) => {
        const admin = admins.find((admin) => admin._id === row.createdBy);
        return (
          <Box>
            <Tooltip title={dayjs(row.createdAt).format("MM/DD/YYYY h:mm a z")}>
              <Chip
                avatar={<Avatar src={admin.image}></Avatar>}
                label={admin.name}
              />
            </Tooltip>
          </Box>
        );
      },
      flex: 2,
    },
    {
      field: "edited",
      headerName: "Edited",
      renderCell: ({ row }: { row: Faq }) => {
        const admin = admins.find((admin) => admin._id === row.editedBy);
        return (
          <Box>
            <Tooltip title={dayjs(row.editedAt).format("MM/DD/YYYY h:mm a z")}>
              <Chip
                avatar={<Avatar src={admin.image}></Avatar>}
                label={admin.name}
              />
            </Tooltip>
          </Box>
        );
      },
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      renderCell: ({ row }) => (
        <Box
          sx={(theme) => ({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: row.isPublished
              ? theme.palette.success.main
              : theme.palette.error.main,
          })}
        >
          {row.isPublished ? <Check /> : <Close />}
        </Box>
      ),
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: ({ row }) => (
        <IconButton
          sx={(theme) => ({
            color: theme.palette.primary.main,
          })}
          onClick={() => console.log(row)}
        >
          <Edit />
        </IconButton>
      ),
      flex: 1,
    },
  ];

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", mx: 3, my: 1 }}
      >
        <Typography variant="h2">Frequently Asked Questions:</Typography>
        <Button
          variant="contained"
          onClick={() => setOpenCreateFaqDialog(true)}
          sx={{ display: "flex", gap: 1 }}
        >
          <Add />
          Create FAQ
        </Button>
      </Box>
      <DataGridPro
        loading={isLoadingFaqData || isRefetchingFaqs}
        rows={faqData.map((faq, index) => ({ ...faq, index }))}
        columns={columns}
        getRowId={(row) => row._id}
        sx={{
          [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
            outline: "transparent",
          },
          [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]:
            {
              outline: "none",
            },
        }}
        slotProps={{
          loadingOverlay: {
            variant: "linear-progress",
            noRowsVariant: "skeleton",
          },
        }}
      />
      <CreateFAQDialog
        open={openCreateFaqDialog}
        onClose={() => setOpenCreateFaqDialog(false)}
        faq={null}
        setFaq={() => {}}
      />
    </>
  );
};
