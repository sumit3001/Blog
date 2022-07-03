import { Box, Heading } from "@chakra-ui/react";
import AddBlogs from "./AddBlogs";
import AddCategory from "./AddCategory";
import BlogTable from "./BlogTable";
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
      <Box>
        <AddBlogs/>
      </Box>
      <Box>
        <BlogTable/>
      </Box>
    </Box>
  )
}

export default Admin;