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
import { format, differenceInMinutes, differenceInSeconds, differenceInHours, differenceInDays } from 'date-fns';
import { FaEdit } from "react-icons/fa";
import { DeleteIcon } from '@chakra-ui/icons';


interface PlansContent {
  username?: string;
  date?: Date;
  id?: number;
  content?: string;
  title?: string

}



export const Content = (props: PlansContent) => {
  const dateString = props.date;
  const providedDate = dateString ? new Date(dateString) : undefined;
  const currentDate = new Date();
  let displayValue = 0;
  let displayUnit = '';
  
  if (providedDate) {
    const differenceMinutes = differenceInMinutes(currentDate, providedDate);
    const differenceSeconds = differenceInSeconds(currentDate, providedDate);
    const differenceHours = differenceInHours(currentDate, providedDate);
    const differenceDays = differenceInDays(currentDate, providedDate);
  
    if (differenceDays >= 1) {
      displayValue = differenceDays;
      displayUnit = 'days';
    } else if (differenceHours >= 1) {
      displayValue = differenceHours;
      displayUnit = 'hours';
    } else if (differenceMinutes >= 1) {
      displayValue = differenceMinutes;
      displayUnit = 'minutes';
    } else {
      displayValue = differenceSeconds;
      displayUnit = 'seconds';
    }
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
    <Box rounded='md' bg='white' marginTop={"20px"} borderRadius={"10px"} border={"1px solid #000"}>
      <Flex bgColor={"#7695EC"} color={"#fff"} padding={"20px"} borderRadius={"10px"} justifyContent={"space-between"}>
        <Heading fontSize={"22px"} rounded='md' fontWeight={"700"}  >
          {props.title}
        </Heading>
        <Flex>
   

          <IconButton  colorScheme=''  backgroundColor={"#7695EC"} aria-label='' icon={ <DeleteIcon />}  onClick={onDeleteOpen} />
          {props.id !== undefined && (
            <Deletepost
              isDeleteOpen={isDeleteOpen}
              onDeleteClose={onDeleteClose}
              id={props.id}
            />
          )}

          <IconButton  colorScheme=''  backgroundColor={"#7695EC"} aria-label=''  icon={ <FaEdit />} onClick={onUpdateOpen} />
          {props.id !== undefined && (
            <UpdatePost
              isUpdateOpen={isUpdateOpen}
              onUpdateClose={onUpdateClose}
              id={props.id}
            />
          )}

        </Flex>

      </Flex>
      <Box  p={"24px"}>
      <Flex justifyContent={"space-between"}>
        <Text paddingRight={"4px"} fontSize={{ base: '13px', md: '16px' } } fontFamily={"400"} color={"#777777"}>
          @{props.username}
        </Text>
    
        <Text fontSize={{ base: '13px', md: '16px' } } fontFamily={"400"}  color={"#777777"}>
        {displayValue} {displayUnit}
        </Text>
      </Flex>
        <Text fontSize={"18px"} fontFamily={"400"} padding={"10px"}>
          {props.content}
        </Text>
        </Box>
    </Box>
  );
};

