import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
// import Account from "./pages/Account";
import ErrorPage from "./pages/ErrorPage";
import './styles/css/main.css'


// rooting
const router = createBrowserRouter([
  {
    path : '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'sign-in',
        element: <SignIn/>
      },
      {
        path: 'user',
        element: <User/>
      },
      // {
      //   path: 'account',
      //   element: <Account/>
      // }
    ]
  }
])

// layout
function Root () {
  return <>
    <Header/>
    <Outlet/>
    <Footer/>
  </>
}

function App() {
  return <RouterProvider router={router}/>
}

export default App;


