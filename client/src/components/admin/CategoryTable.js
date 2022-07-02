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
import { getCategories } from "../../redux/actions/category";

const CategoryTable = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="purple">
        <TableCaption>Categories</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {categories === 0
            ? "No Categories"
            : categories.map(({ name, description }) => (
                <Tr>
                  <Td>{name}</Td>
                  <Td>{description}</Td>
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

export default CategoryTable;
