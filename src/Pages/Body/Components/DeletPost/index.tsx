import {
  Button,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as IconSvg } from '../../../../../public/Icons/Vector.svg';


import { usePost } from "../../../../Provider/Posts";

interface DeleteProps {
  isDeleteOpen: boolean;
  onDeleteClose: () => void;
  id: number;
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
    <Modal closeOnOverlayClick={false} isOpen={isDeleteOpen} onClose={onDeleteClose} isCentered size={"xl"} >
      <ModalOverlay />
      <ModalContent>

        <ModalHeader   fontSize="22px" fontWeight="500"> Are you sure you want to delete this item?</ModalHeader>
        <ModalBody>
          <Flex  gap={"10px"} justifyContent={"flex-end"} >
          <Button
              backgroundColor="#fff"
              width={"120px"} 
              height={"32px"} 
              borderRadius={"8px"} 
            
              onClick={onDeleteClose}
              border={"1px solid black"}
            >
              Cancel
            </Button>
            <Button
              backgroundColor={"#FF5151"}
              color={"#fff"}
              
              width={"120px"} height={"32px"} borderRadius={"8px"} colorScheme='Red 600' 
              onClick={() => buttonDelete(id)}
            >
              Delete
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

