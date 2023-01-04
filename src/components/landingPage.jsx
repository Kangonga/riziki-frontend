import {Link} from "react-router-dom"
import NavBar from "./NavBar"
import TalentCards from "./TalentCards"

export default function LandingPage(){
    return (
        <div className="container">
           <NavBar />
            <main>
                <section className="landingPageBody">
                    <h1>Find Your Dream Job Today</h1>
                    <p>
                        We help you find exciting and fully opportunities around the world.
                    </p>
                    <p>
                        Subscribe today to get the latest openings sent to your inbox.
                    </p>
                    <input type="email" placeholder="Your Email"/>
                    <button className="subscribe">Subscribe</button>
                </section>
                <TalentCards />
            </main>
            <footer className="landingPageFooter">
                <section className="footerDiv">
                        <h1>For Talent</h1>
                        <div>How to get hired</div>
                        <div>Payment Platforms</div>
                        <div>Conflict resolution</div>
                </section>

                <section className="footerDiv">
                        <h1>For Employers</h1>
                        <div>How to find talent</div>
                        <div>Payment Platforms</div>
                        <div>Conflict resolution</div>
                </section>

                <section className="footerDiv">
                        <h1>Resources</h1>
                        <div>Success Stories</div>
                        <div>Blog</div>
                        <div>Help and Support</div>
                </section>
            </footer>
           
        </div>
    )
}