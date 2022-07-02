import { Box, Heading } from "@chakra-ui/react";
import AddCategory from "./AddCategory";
import CategoryTable from "./CategoryTable";

const Admin = () => {
  return(
    <Box m={4}>
      <Heading textAlign={"center"}>Admin</Heading>
      <Box>
        <AddCategory/>
      </Box>
      <Box>
        <CategoryTable/>
      </Box>
    </Box>
  )
}

export default Admin;