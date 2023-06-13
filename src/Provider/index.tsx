import { ReactNode } from "react";
import { PostProvider } from "./Posts";


interface ProviderProps {
    children: ReactNode;
  }
  
  export const Providers = ({ children }: ProviderProps) => {
    return (
        <PostProvider>
            {children}
        </PostProvider>
    )
  }