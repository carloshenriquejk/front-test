import { Box, Button, CardHeader, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { useState , useEffect} from "react";
import { Form } from "./Components/Form/Index";
import { usePost } from "../../Provider/Posts";
import { Content } from "./content";

interface FormData {
    title: string;
    content: string;
  }

export const Body = () => {

    const {posts, post,  getPost, getPosts} = usePost();

    return (
        <Flex alignItems={"flex-start"} justifyContent={"center"} width={"100vw"} height={"100vh"} bgColor={"#dddddd"}>
            <Box width={"500px"}   rounded='md' bg='white' >
                <Heading size={"22px"}  fontWeight={"700"} bgColor={"#7695EC"} color={"#fff"} padding={"20px"}>
                CodeLeap Network
                </Heading>
                <Box padding={"20px"}>
                <Box borderRadius={"10px"}  border={"1px solid #000"} padding={"10px"}>
                    <Heading>What’s on your mind?</Heading>
                    <Form></Form>
                </Box>

                <Box  rounded='md' bg='white'  marginTop={"20px"} borderRadius={"10px"}  border={"1px solid #000"}>
                    
                { posts.length > 0 &&
                posts.map((item) => (
                <Content 
                username={item.username}
                date={item.created_datetime}
                id={item.id}
                content={item.content}
                
                />
            ))}
                </Box>
                </Box>
            </Box>
        </Flex>
    )
}