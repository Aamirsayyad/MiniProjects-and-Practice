import './navbar.css';
function navbar(){
    return (
        <nav>
            <h1 className="nav-title">My First React Website</h1>
            <ul className="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">About</a></li>
            </ul>
            <div className="nav-profile-image"> 

            </div>
        </nav>
    )
}
export default navbar;