import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services";
import { error } from "console";
import { useToast } from "@chakra-ui/react";

interface PostProviderTools {
  posts: IPosts[];
  setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>;
  getPosts: () => Promise<void>
  registerPost: IPosts;
  setRegisterPost: React.Dispatch<React.SetStateAction<IPosts>>
  setPost: React.Dispatch<React.SetStateAction<IPosts>>;
  post: IPosts;

  registerNewPost: (post: IPostsRegister) => Promise<void>;
  deletePost: (PostId: number) => Promise<void>;
  updatePost: (post: IPostsRegister) => Promise<void>;
}
interface IPosts {

  id?: number;
  username?: string;
  created_datetime?: Date;
  title?: string;
  content?: string;

}


interface IPostsRegister {

  id?: number;
  username?: string;
  created_datetime?: Date;
  title?: string;
  content?: string;

}


interface PostProviderProps {
  children: ReactNode;
}

const PostContext = createContext<PostProviderTools>({} as PostProviderTools)

export const PostProvider = ({ children }: PostProviderProps) => {

  const [posts, setPosts] = useState<IPosts[]>([])
  const [post, setPost] = useState<IPosts>({} as IPosts)
  const [action, setAction] = useState<boolean>(false)

  const [registerPost, setRegisterPost] = useState<IPosts>({} as IPosts)

  const toast = useToast({
    position: "top",
    duration: 1000,
    isClosable: true,
  });

  const getPosts = async () => {
    await api
      .get("careers/")
      .then((res) => { setPosts(res.data.results); })
      .catch(err => console.log(err))
  };



  const registerNewPost = async (post: IPostsRegister) => {
    await api
      .post(`/careers/`, post)
      .then((res) => {
        setAction(!action)
        toast({
          status: "success",
          title: "Post cadastrado com sucesso!!",
        });
      })
      .catch((error) =>{ 
        console.log(error)
      
        toast({
          status: "error",
          title: "Error ao cadastrado Post...",
        });
      });

  };

  const deletePost = async (PostId: number) => {
    try {
      await api
        .delete(`careers/${PostId}/`,)
        .then((res) => {
          setAction(!action)
          toast({
            status: "success",
            title: "Post deletado com sucesso!!",
          });
        });
    } catch (error) {
      console.log(error);
 
        toast({
          status: "error",
          title: "Error ao deletado Post...",
        });
    }
  };

  const updatePost = async (post: IPostsRegister) => {
    if (!post.title) {
      delete post.title;
    }
    if (!post.content) {
      delete post.content;
    }

    await api
      .patch(`/careers/${post.id}/`, post,)
      .then((res) => {
        setAction(!action)
        toast({
          status: "success",
          title: "Post atualizado com sucesso!!",
        });
      })
      .catch((error) => {
        console.log(error)
        toast({
          status: "error",
          title: "Error ao atualizar Post...",
        });
      });
  };

  useEffect(() => {
    getPosts()
  }, [action])


  return (
    <PostContext.Provider value={{
      registerNewPost,
      getPosts,
      posts,
      setPosts,
      registerPost,
      setRegisterPost,
      setPost,
      post,
      deletePost,
      updatePost
    }}>
      {children}
    </PostContext.Provider>


  )
}

export const usePost = () => useContext(PostContext)