import NavBar from "./NavBar";
import "../cards.css"

export default function Cards(){
    return(
        <>
            <NavBar />
            <section id="cardContainer">
                <div className="card">
                    <h3 className="heading">Fullstack web app developer (marketplace)</h3>
                    <h4>New</h4>
                </div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </section>
        </>
    )
}