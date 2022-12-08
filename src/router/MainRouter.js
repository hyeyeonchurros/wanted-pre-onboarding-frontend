import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../pages/auth";
import ToDo from "../pages/ToDo";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
        <Route path="todo" element={<ToDo />}></Route>
      </Route>
    </Routes>
  );
};

export default MainRouter;
