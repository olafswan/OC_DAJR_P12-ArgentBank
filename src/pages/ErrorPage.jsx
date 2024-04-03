import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PageError () {
    const error = useRouteError()
    console.log(error);
    return <>
        <Header/>
        <div className="error-page">
        <h1>Oops!</h1>
        <h2>404 - PAGE NOT FOUND!</h2>
        <NavLink to="/">RETURN HOME</NavLink>
        </div>
        <Footer/>
    </>
}

export default PageError;