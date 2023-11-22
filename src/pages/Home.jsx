import { Footer } from "../sections/Footer";
import { Header } from "../sections/Header";
import { Services } from "../sections/Services";
import backgroundImg from "../components/hero/heroBackground.jpg"

export function HomePage(){
    return(
        <>
        <Header/>
        <main>
            {/* <div className="col-12" style={{backgroundImage: `url(${backgroundImg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", maxHeight: "600px"}}>
                <section className="container">
                        <div className="row">

                            <div className="col-sm-8 col-md-6 col-lg-6"  style={{marginTop: "17%", paddingBottom: "10%"}}>
                                <h5 className="mb-3">Top Brands Trust Our Digital Services!</h5>
                                <h2 className="mb-3">Robust Search Engine Marketing Strategies for 100% Results</h2>
                                <p className="mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br/> accusan <br/> tium doloremque laudantium, totam rem aperiam.</p>
                                <div className="d-flex gap-3 flex-wrap">
                                <button type="button" class="btn btn-primary">Start now</button>
                                <button type="button" class="btn btn-primary">Learn more</button>
                                </div>
                            </div>
                        </div>
                </section>
            </div>

                <section className="container mt-5">
                        <div className="row">
                            <div className="col-5">
                                <p>Our Services</p>
                                <h1>Services we offer</h1>
                            </div>
                            <div className="col-7">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
                            </div>
                        </div>
                </section>

                <section className="container mt-5">
                    <div style={{ display: "flex", justifyContent: "space-around"}}>
                        <div style={{padding: '20px', border: "1px solid black"}}>
                            <div >SEO Consultancy</div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam, eaque ipsa</p>
                            <a href="/">Learn More</a>
                        </div>
                        <div>
                            <div >Content Marketing</div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam, eaque ipsa</p>
                            <a href="/">Learn More</a>
                        </div>
                        <div>
                            <div >Keyword Research</div>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium, totam rem aperiam, eaque ipsa</p>
                            <a href="/">Learn More</a>
                        </div>
                    </div> */}

            <Services limit={3}/>
        </main>
        <Footer/>
        </>
    )
}