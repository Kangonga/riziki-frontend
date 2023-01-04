import {Link} from "react-router-dom"

export default function TalentCards(){
    return(
        <>
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
        </>
    )
}