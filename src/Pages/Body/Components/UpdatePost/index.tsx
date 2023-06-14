import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { usePost } from "../../../../Provider/Posts";
import { yupResolver } from "@hookform/resolvers/yup";

interface UpdateProps {
  isUpdateOpen: boolean;
  onUpdateClose: () => void;

  id: number;
}

export const UpdatePost = ({ isUpdateOpen, onUpdateClose, id }: UpdateProps) => {


  const { posts, setRegisterPost, registerPost, updatePost } = usePost();


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

    const contextName = { id: id, title: data.title, content: data.content }

    updatePost(contextName)
    reset()
  });



  return (
    <Modal isOpen={isUpdateOpen} onClose={onUpdateClose} isCentered size={"xl"}>
      <ModalOverlay />
      <ModalContent >
      <ModalHeader fontSize={"22px"} color={"black"} fontWeight={"700"}>Edit item</ModalHeader>
        <ModalBody >
          <form onSubmit={onHandleSubmit}>

            <Text fontSize={"16px"} fontFamily={"400"} color={"black"}>
              Title
            </Text>
            <Input
                border={"1px solid black"}
              placeholder="Hello world"
              {...register("title")}
            />

            <Text fontSize={"16px"} fontFamily={"400"} paddingTop={"10px"} color={"black"}>
              Content
            </Text>
            <Input
            border={"1px solid black"}
              placeholder="Content here"
              {...register("content")}
            />
            <Flex padding={"20px"} gap={"10px"}>
            <Button
              backgroundColor="#fff"
              width={"120px"} height={"32px"} 
              borderRadius={"8px"} 
          
              border={"1px solid black"}
            
              onClick={onUpdateClose}
            >
              Cancel
            </Button>
          
              <Button
               width={"120px"} 
               height={"32px"} 
               borderRadius={"8px"} 
               colorScheme='' 
                type="submit" 
             
                backgroundColor={"#47B960"}>
                  Save
              </Button>
          
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
