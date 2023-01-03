import logo from "../assets/sitelogo.jpg"
import {Link} from "react-router-dom"

export default function LandingPage(){
    return (
        <div className="container">
            <header className="header">
            <figure className="logoHolder">
                <img src={logo} alt="sitelogo" className="sitelogo" />
            </figure>
            <nav>
            <Link to="users">Find work</Link>
            <Link to="employers">Find Talent</Link>
            <Link to="/">Login</Link>
            </nav>
            </header>
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
                <section className="landingPageCTA">
                    <h1>
                        Browse through our catalogue of world class talent
                    </h1>
                    <h2>Looking for work? <Link>Browse jobs</Link></h2>
                    <section className="categories">
                        <div>Writing and Translation</div>
                        <div>Legal</div>
                        <div>Engineering and Architecture</div>
                        <div>Software development</div>
                        <div>IT and networking</div>
                        <div>Sales and marketing</div>
                    </section>
                </section>
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