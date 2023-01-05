import NavBar from "./NavBar"
import TalentCards from "./TalentCards"
import Footer from "./Footer"

export default function LandingPage(){
    return (
        <div className="container">
           <NavBar />
            <main>
                <section className="landingPageBody">
                    <h1>Find Your Dream Job Today</h1>
                    <p>
                        We help you find exciting and fully remote opportunities around the world.
                    </p>
                    <p>
                        Subscribe today to get the latest openings sent to your inbox.
                    </p>
                    <input type="email" placeholder="Your Email"/>
                    <button className="subscribe">Subscribe</button>
                </section>
                <TalentCards />
                <Footer />
            </main>  
        </div>
    )
}