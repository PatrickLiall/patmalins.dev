import './navbar.scss';

export default function Navbar() {
    return (
        <div className="navbar">
        <div className='left'>
            <a className='navbar-logo' href="#home">
                <img src="Assets/NavLogo.png" alt="Logo" />
            </a>
        </div>
        <div className="right">
            <ul className='menu'>
                <a href="#home"><li>Home</li></a>
                <a href="about"><li>About</li></a>
                <a href="contact"><li>contact</li></a>
            </ul>
        </div>
        </div>
    )
}
