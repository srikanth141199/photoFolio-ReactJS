import "./Navbar.css"
import AlbumnImage from "../../assets/tıme.png"

export default function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img className="navbar-image" src={AlbumnImage} alt="Albumn" />Navbar</a>
            </div>
        </nav>
        </>
    );
}
