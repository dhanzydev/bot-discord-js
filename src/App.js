import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import styled from "styled-components";
import Topbar from "./Components/Topbar/Topbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Page/Login/Login";
import Register from "./Page/Register/Register";
import Home from "./Page/Home/Home";

const Background = styled.div`
  background-color: #393e46;
`;

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
function App() {
  return (
    <Background>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </Background>
  );
}

export default App;
