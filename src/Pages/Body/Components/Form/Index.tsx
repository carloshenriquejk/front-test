import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  ChakraProvider,
  Box,
  Text,
} from '@chakra-ui/react';
import { usePost } from '../../../../Provider/Posts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface FormData {
  title: string;
  content: string;
}

export const Form = () => {

  const {posts, setRegisterPost, registerPost, registerNewPost} = usePost();

    
  const postSchema = yup.object().shape({
    title: yup.string().required(),
    content: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(postSchema) });


const onHandleSubmit = handleSubmit((data) => {
 const contextName = {username: registerPost.username, title : data.title , content: data.content  }
 registerNewPost(contextName)
 reset() 
});



  return (
    <ChakraProvider>
      <VStack spacing="4" align="start" w="400px">
      <form onSubmit={onHandleSubmit}>

                <Text>
               Title
                </Text>
             <Input
                placeholder="Hello world"
                {...register("title")}
                />

               <Text>
               Content
                </Text>
             <Input
                placeholder="Content here"
                {...register("content")}
                />

                <Box width={"100%"} pt={4}>
                <Button  colorScheme='teal' size='sm' type="submit" >ENTER</Button>
                </Box>
             </form>
      </VStack>
    </ChakraProvider>
  );
};

