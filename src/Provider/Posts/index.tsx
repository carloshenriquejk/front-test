import { ReactNode, createContext, useContext } from "react";

interface PostProviderTools {

} 

interface PostProviderProps {
    children: ReactNode
}

const PostContext = createContext<PostProviderTools >({} as PostProviderTools)

export const PostProvider = ({ children }: PostProviderProps) => {
return (
  
     <PostContext.Provider value={{}}>
        {children}
    </PostContext.Provider>


)
}

export const usePost = () => useContext(PostContext)