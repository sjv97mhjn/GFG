
import '../css/stylesheet.css';


function Header() {
    return (
        <div className="headerClass">
            <h1 style={{ display: "inline-block" }} > My Blogging Website</h1>
            <h1 style={{ display: "inline-block", float: "right" }}> Login / Sign Up </h1>
        </div>
    )
}

export default Header;