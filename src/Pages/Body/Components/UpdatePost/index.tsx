import {
  Box,
    Button,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
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
  
    id: number ;
  }
  
  export const UpdatePost = ({ isUpdateOpen, onUpdateClose, id }: UpdateProps) => {


    const {posts, setRegisterPost, registerPost, updatePost} = usePost();

    
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

   const contextName = {id: id,  title : data.title , content: data.content  }
 console.log(contextName)
   updatePost(contextName)
   reset() 
  });
  
  

    return (
      <Modal isOpen={isUpdateOpen} onClose={onUpdateClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt="30px">
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
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
