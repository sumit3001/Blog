import {
  Avatar,
  Box,
  Stack,
  Text,
  useColorModeValue,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { blogs } = useSelector((state) => state.blog);
  const { id } = useParams();

  const fetchBlog = (blogId) => {
    const blog = blogs.find((blog) => blog._id == blogId);
    setSelectedBlog(blog);
  };

  useEffect(() => {
    fetchBlog(id);
  }, [blogs]);

  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Heading
        // fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        {selectedBlog && selectedBlog.heading}
      </Heading>
      <Box>
        <Image
          borderRadius="lg"
          boxSize="700px"
          height="400px"
          src={`${selectedBlog && selectedBlog.image}`}
          alt="some good alt text"
          objectFit="contain"
        />
      </Box>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        {selectedBlog && selectedBlog.description}
      </Text>
      <Box textAlign={"center"}>
        <Avatar
          src={`${selectedBlog && selectedBlog.image}`}
          alt={"Jenny Wilson"}
          mb={2}
        />

        <Text fontWeight={600}>Jenny Wilson</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Vice President
        </Text>
      </Box>
    </Stack>
  );
};

export default Blog;
