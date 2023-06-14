import {
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Text,
  } from "@chakra-ui/react";

import { usePost } from "../../../../Provider/Posts";
  
  interface DeleteProps {
    isDeleteOpen: boolean;
    onDeleteClose: () => void;
  
    id: number ;
  }
  
  export const Deletepost = ({
    isDeleteOpen,
    onDeleteClose,
    
    id,
  }: DeleteProps) => {
    const { deletePost } = usePost();
  
    const buttonDelete = (id: number) => {
        deletePost(id);
      onDeleteClose();
    };
    return (
      <Modal isOpen={isDeleteOpen} onClose={onDeleteClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt="30px">
            <Text textAlign="center" fontSize="24px" fontWeight="500">
              Tem certeza que deseja excluir o plano ?
            </Text>
          </ModalBody>
  
          <ModalFooter alignItems="center">
            <HStack width="100%" alignItems="center" justifyContent="center">
              <Button
                colorScheme="blue"
                borderRadius="5px"
                mr={3}
                onClick={onDeleteClose}
              >
                Cancelar
              </Button>
              <Button
                borderRadius="5px"
                variant="solid"
                colorScheme="gray"
                onClick={() => buttonDelete(id)}
              >
                Deletar
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  