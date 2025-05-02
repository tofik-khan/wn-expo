import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { DataGridPro, gridClasses, GridColDef } from "@mui/x-data-grid-pro";

export const PageFaqs = () => {
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
      field: "title",
      headerName: "Title",
      renderCell: ({ row }) => row.title,
      flex: 2,
    },
    {
      field: "body",
      headerName: "Body",
      renderCell: ({ row }) => row.body.slice(0, 50),
      flex: 4,
    },
    {
      field: "actions",
      headerName: "Actions",
      renderCell: ({ row }) => row.body.slice(0, 50),
      flex: 4,
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
          onClick={() => console.log("Create FAQ")}
          sx={{ display: "flex", gap: 1 }}
        >
          <Add />
          Create FAQ
        </Button>
      </Box>
      <DataGridPro
        loading={false}
        rows={[]}
        columns={columns}
        // getRowId={(row) => row._id}
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
    </>
  );
};
