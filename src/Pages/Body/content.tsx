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
  Heading,
  Spacer,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { usePost } from '../../Provider/Posts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DeletIcon from "../../../public/Icons/Vector.svg"
import { Deletepost } from './Components/DeletPost';
import { UpdatePost } from './Components/UpdatePost';

interface FormData {
  title: string;
  content: string;
}

interface PlansContent {
    username?: string;
    date?: Date;
    id?:  number;
    content?: string;

    
}



export const Content = (props: PlansContent) => {
  if(props.date){
 const date = new Date(); 
 const time = new Date(props.date)
 const datePubli = time.getTime() - date.getTime() 
 const minutes = Math.round((datePubli / 1000 ) / 60)

 console.log(minutes)
 
}

const {
  isOpen: isDeleteOpen,
  onOpen: onDeleteOpen,
  onClose: onDeleteClose,
} = useDisclosure();

const {
  isOpen: isUpdateOpen,
  onOpen: onUpdateOpen,
  onClose: onUpdateClose,
} = useDisclosure();


  return (
    <Box>
      <Flex bgColor={"#7695EC"} color={"#fff"} padding={"20px"}>
    <Heading size={"22px"} rounded='md'  fontWeight={"700"}  >
    Welcome to CodeLeap network!
    </Heading>

    <Flex>
 

      <IconButton aria-label='' bgColor={"#7695"} onClick={onDeleteOpen}/>
      {props.id !== undefined && (
  <Deletepost
    isDeleteOpen={isDeleteOpen}
    onDeleteClose={onDeleteClose}
    id={props.id}
  />


  
)}


<IconButton aria-label='' bgColor={"#7695"} onClick={onUpdateOpen}/>
      {props.id !== undefined && (
  <UpdatePost
    isUpdateOpen={isUpdateOpen}
    onUpdateClose={onUpdateClose}
    id={props.id}
  />


  
)}

  
    </Flex>

    </Flex>
    <Flex p={"10px"}>
  <Box>
  @{props.username}
  </Box>
  <Spacer />
  <Box >
  {props.date?.toString()} minutes ago
  </Box>
</Flex>

    <Flex padding={"10px"} flexDir={"column"}>
     
     <Text>
    { props.content}
     </Text>
   
    </Flex>
    </Box>
  );
};

