import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import ufoImg from "../assets/404.png"


export function NoPage(){
    return(
        <>
        <Header/>
        <main>
            <section className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 offset-lg-2 col-xl-3 offset-xl-3">
                        <h1>404</h1>
                        <h2>Page Not Found</h2>
                    </div>
                    <div className="col-12 col-sm-6 col-md-8 col-lg-4 col-xl-3">
                        <img src={ufoImg} alt="ufo" />
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}