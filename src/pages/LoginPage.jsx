import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Login } from "../sections/Login";

export function LoginPage(){
    return(
        <>
        <Header/>
        <main>
            <Login/>
        </main>
        <Footer/>
        </>
    )
}