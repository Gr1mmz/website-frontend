import React from "react";
import {Box, Img} from "@chakra-ui/react";

const BlogWallpaper = () => {
  return (
    <Box position="relative" minW="100%" height="40vh" bg={`url(../blog_layout.jpeg)`} bgPosition="0% 75%"
         bgRepeat="no-repeat" bgSize="cover" display="flex" justifyContent="center">
      <Img position="absolute" bottom="-10%" src={`../avatar.jpg`} borderRadius="full" boxSize="150px"
           alt="Mikhail Kraevskiy" border="1px solid #fff"
      />
    </Box>
  );
};

export default BlogWallpaper;