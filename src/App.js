import { createBrowserRouter, RouterProvider } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Components/Navbar/Topbar";
import Login from "./Page/Login/Login";

const Background = styled.div`
  background-color: #393e46;
`;

// const Layout = () => {
//   return (
//     <>
//       <Navbar />
//     </>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
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
