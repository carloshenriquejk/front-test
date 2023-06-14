import { Box, Button, CardHeader, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { Form } from "./Components/Form/Index";
import { usePost } from "../../Provider/Posts";
import { Content } from "./content";
import { useNavigate } from "react-router-dom";

interface FormData {
    title: string;
    content: string;
}

export const Body = () => {

    const { posts, } = usePost();


    const [postsPerPage, setPostsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const navigate = useNavigate()

    const logout = () => {
        
        navigate("/")
        
    }

    return (
        <Flex alignItems={"flex-start"} justifyContent={"center"} bgColor={"#dddddd"}>
            <Box width={"50rem"} rounded='md' bg='white'  >
                <Flex  bgColor={"#7695EC"} color={"#fff"} padding={"27px"}  justifyContent={"space-between"}>
                    <Text fontSize={{  md: "22px", sm: '16px' }} fontWeight={"700"} >
                        CodeLeap Network
                    </Text>

                    <Button
                        marginTop={"10px"}
                        backgroundColor={"#FF5151"}
                        color={"#fff"}
                        width={"120px"}
                        height={"32px"}
                        borderRadius={"8px"}
                        colorScheme=''
                        onClick={logout}
                    >
                        logout
                    </Button>
                </Flex>

                <Box padding={"20px"}>
                    <Box borderRadius={"10px"} border={"1px solid #000"} padding={"10px"}>
                        <Heading fontSize={"22px"} marginLeft={"20px"} paddingTop={"10px"}  >What’s on your mind?</Heading>
                        <Form />
                    </Box>

                    {currentPosts.length > 0 &&
                        currentPosts.map((item) => (
                            <Content
                                title={item.title}
                                username={item.username}
                                date={item.created_datetime}
                                id={item.id}
                                content={item.content}
                                key={item.id}
                            />
                        ))}

                    { /*  utilizei o ChatGPT para fazer a Paginação  */}

                    {posts.length > postsPerPage && (
                        <Box paddingTop={"10px"}>
                            <Button
                                isDisabled={currentPage === 1 || currentPosts.length <= 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                Anterior
                            </Button>
                            {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
                                <Button
                                    key={index}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </Button>
                            ))}
                            <Button
                                isDisabled={currentPage === Math.ceil(posts.length / postsPerPage)}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Próxima
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>
        </Flex>
    )
}