import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react"


export const Home = () => {
    return (
        <Flex alignItems={"center"} justifyContent={"center"} width={"100vw"} height={"100vh"}>
            <Flex flexDir={"column"}>
                <Heading>
                Welcome to CodeLeap network!
                </Heading>
                <Text>
                Please enter your username
                </Text>

                <Input
                placeholder="John doe"/>

                <Box width={"100%"} justifyContent={"flex-end"}>
                <Button>ENTER</Button>
                </Box>
            </Flex>
        </Flex>
    )
}