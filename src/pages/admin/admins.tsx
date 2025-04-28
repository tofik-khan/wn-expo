import { useAdminsQuery } from "@/queries/admin"
import { Typography } from "@mui/material"

export const PageAdmins = () => {
  const { data: admins, isLoading: isLoadingAdmins} = useAdminsQuery()

  if(isLoadingAdmins) return <p>Loading...</p>
  
  return (
    <>
      <Typography variant="h2">Admins:</Typography>
      {JSON.stringify(admins)}
    </>
  )
}