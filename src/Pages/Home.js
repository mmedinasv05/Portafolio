import Footer from "../Components/Footer";
import Hamburguesa from "../Components/Hamburguesa";
//import Header from "../Components/Header";
import Welcome from "../Components/Welcome";

export default function Home(){
    return(
        <>
            {/* <Header/> */}
            <Hamburguesa/>
            <Welcome/>
            <Footer/>
        </>
    )
}