import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePost } from "../../Provider/Posts";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  
    const { setRegisterPost} = usePost();

    const navigate = useNavigate()
  const postSchema = yup.object().shape({
    name: yup.string().required(),

  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(postSchema) });


  const onHandleSubmit = handleSubmit((data) => {


 const contextName = { username : data.name }
 setRegisterPost(contextName);
 navigate("/posts")
 reset()
  });

    return (
        <Flex alignItems={"center"} justifyContent={"center"} width={"100vw"} height={"100vh"} bgColor={"#dddddd"}>
            <Flex flexDir={"column"} width={"500px"} height={"205px"}  rounded='md' bg='white' padding={"20px"}>
                <Heading size={"22px"}  fontWeight={"700"}>
                Welcome to CodeLeap network!
                </Heading>
                <Text>
                Please enter your username
                </Text>

             <form onSubmit={onHandleSubmit}>
             <Input
                placeholder="John doe"
                {...register("name")}
                />

                <Box width={"100%"} pt={4}>
                <Button  colorScheme='teal' size='sm' type="submit" >ENTER</Button>
                </Box>
             </form>
            </Flex>
        </Flex>
    )
}