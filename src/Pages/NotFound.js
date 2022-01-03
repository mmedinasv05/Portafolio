import Error404 from "../Components/Error404";
import Footer from "../Components/Footer";
import Hamburguesa from "../Components/Hamburguesa";
//import Header from "../Components/Header";


export default function NotFound(){
    return(
        <>
            {/* <Header/> */}
            <Hamburguesa/>
            <Error404/>
            <Footer/>
        </>
    )
}