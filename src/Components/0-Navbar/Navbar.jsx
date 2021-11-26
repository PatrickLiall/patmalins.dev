import './navbar.scss';

export default function Navbar() {
    return (
        <div className="navbar">
                <ul className='navbar-items'>
                    <a className='navbar-logo' href="#home">
                        <img src="Assets/NavLogo.png" alt="Logo" />
                    </a>
                    <a href="#home">
                        <li>Home</li>
                    </a>
                    <a href="about">
                        <li>About</li>
                    </a>
                    <a href="contact">
                        <li>contact</li>
                    </a>
                </ul>
        </div>
    )
}
