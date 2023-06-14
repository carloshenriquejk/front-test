import { Box, Button, Flex, Heading, Input, Text, useToast } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePost } from "../../Provider/Posts";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const { setRegisterPost } = usePost();

  const navigate = useNavigate()
  const postSchema = yup.object().shape({
    name: yup.string().required(),

  });

  const toast = useToast({
    position: "top",
    duration: 1000,
    isClosable: true,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(postSchema) });


  const onHandleSubmit = handleSubmit((data) => {


    const contextName = { username: data.name }
    setRegisterPost(contextName);
    navigate("/posts")
    reset()
    toast({
      status: "success",
      title: "Nome cadastrado!!",
    });
  });

  return (
    <Flex alignItems={"center"} justifyContent={"center"} width={"100vw"} height={"100vh"} bgColor={"#dddddd"} borderRadius={"16px"}>
      <Flex flexDir={"column"} width={"500px"} height={"205px"} rounded='md' bg='white' padding={"24px"}>
        <Heading fontSize={{ base: '14px', md: '22px' }} fontWeight={"700"} lineHeight={"25.74px"} >
          Welcome to CodeLeap network!
        </Heading>



        <Text paddingTop={{ base: '6px', md: "15px" }} fontSize={{ base: '13px', md: '16px' }} lineHeight={"18px"} fontWeight={"400"} color={"black"}>
          Please enter your username
        </Text>

        <form onSubmit={onHandleSubmit}>
          <Input
            size={{ base: 'sm ', md: "md" }}
            marginTop={"10px"}
            border={"1px solid black"}
            placeholder="John doe"
            {...register("name")}
          />

          <Flex width={"100%"} pt={4} justifyContent={"flex-end"}>
            <Button
              colorScheme=''
              size='sm'
              type="submit"
              backgroundColor="#7695EC"
              width={{ base: '86px', md: "120px" }}
              height={{ base: '24px', md: "32px" }}
              borderRadius={"8px"}
              fontSize={{ base: '12px', md: "16px" }}
              fontWeight={"700"}
              lineHeight={"18.75px"}



            >ENTER</Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  )
}