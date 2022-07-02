import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {addCategory} from '../../redux/actions/category'
import { useDispatch } from 'react-redux';

const AddCategory = () => {

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();

  const handelAdd = () => dispatch(addCategory(name, description));

  return (
    <Box m={4} w='50%'> 
      <Heading>Add Category</Heading>
      <FormControl marginTop={4}>
        <FormLabel>Category Name</FormLabel>
        <Input onChange={e=>setName(e.target.value)} type="text" />
        <FormLabel>Category Description</FormLabel>
        <Input onChange={e=>setDescription(e.target.value)} type="text" />
      </FormControl>
      <Button onClick={handelAdd} marginTop={4} colorScheme='blue'>Submit</Button>
    </Box>
  );
};

export default AddCategory;