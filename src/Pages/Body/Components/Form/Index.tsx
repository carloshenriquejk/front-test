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
  Flex,
  Textarea,
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

  const { posts, setRegisterPost, registerPost, registerNewPost } = usePost();


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
    const contextName = { username: registerPost.username, title: data.title, content: data.content }
    registerNewPost(contextName)
    reset()
  });



  return (

      <VStack spacing="4" align="start" w="400px"  marginLeft={"20px"}>
        <form onSubmit={onHandleSubmit}>

          <Text fontSize={"16px"} fontFamily={"400"} color={"black"} paddingTop={"20px"}  paddingBottom={"8px"}>
            Title
          </Text>
          <Input
          width={"43.75rem"}
           border={"1px solid black"}
          
            placeholder="Hello world"
            {...register("title")}
          />

          <Text fontSize={"16px"} fontFamily={"400"} color={"black"} paddingTop={"20px"} paddingBottom={"8px"}>
            Content
          </Text>
       
          <Textarea    border={"1px solid black"}
            resize={"none"}
          placeholder="Content here"
          height={"70px"}
          {...register("content")}>
          
          </Textarea>

          <Flex width={"100%"}  pt={4}  justifyContent={"flex-end"}>
            <Button          
              backgroundColor={"#7695EC"}
              color={"#fff"}
              width={"120px"} 
              height={"32px"}
              colorScheme='' 
              borderRadius={"8px"}
              type="submit">
                Create
            </Button>
          </Flex>
        </form>
      </VStack>

  );
};

