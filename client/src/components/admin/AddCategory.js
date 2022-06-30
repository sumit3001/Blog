import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

const AddCategory = () => {

  const [name, setName] = useState();
  const [description, setDescription] = useState();

  return (
    <Box m={4} w='50%'> 
      <Heading>Add Category</Heading>
      <FormControl marginTop={4}>
        <FormLabel>Category Name</FormLabel>
        <Input onChange={e=>setName(e.target.value)} type="text" />
        <FormLabel>Category Description</FormLabel>
        <Input onChange={e=>setDescription(e.target.value)} type="text" />
      </FormControl>
      <Button  marginTop={4} colorScheme='blue'>Submit</Button>
    </Box>
  )
}

export default AddCategory;