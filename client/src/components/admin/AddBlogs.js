import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addBlog } from "../../redux/actions/blog";

const AddBlogs = () => {

  const [heading, setHeading] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(addBlog(heading, description, image));
  // const handleAdd = () => {
  //   console.log(heading, description, image)
  // }

  return (
    <Box m={4} w='50%'> 
      <Heading>Add Blogs</Heading>
      <FormControl marginTop={4}>
        <FormLabel>Blog Heading</FormLabel>
        <Input onChange={e=>setHeading(e.target.value)} type="text" />
        <FormLabel>Blog Description</FormLabel>
        <Input onChange={e=>setDescription(e.target.value)} type="text" />
        <FormLabel>Blog image</FormLabel>
        <Input onChange={e=>setImage(e.target.value)} type="text" />
      </FormControl>
      <Button onClick={handleAdd} marginTop={4} colorScheme='blue'>Submit</Button>
    </Box>
  );
};

export default AddBlogs;