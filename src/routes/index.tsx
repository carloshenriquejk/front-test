import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Body } from "../Pages/Body";


export const Router = () => {
  return (
    <>
      <Routes>
        
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>

      <Routes>
        <Route
          path="/posts"
          element={<Body />}
        />
      </Routes>

    </>
  )
}  