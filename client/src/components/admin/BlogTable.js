import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getBlogs } from "../../redux/actions/blog";

const BlogTable = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="purple">
        <TableCaption>Blogs</TableCaption>
        <Thead>
          <Tr>
            <Th>Heading</Th>
            {/* <Th>Description</Th> */}
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {blogs === 0
            ? "No blogs"
            : blogs.map(({ heading, description }) => (
                <Tr>
                  <Td>{heading}</Td>
                  {/* <Td>{description}</Td> */}
                  <Td>
                    <Stack spacing={4} direction="row" align="center">
                      <Button colorScheme="teal" size="md">
                        Edit
                      </Button>
                      <Button colorScheme="teal" size="md">
                        Delete
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BlogTable;
