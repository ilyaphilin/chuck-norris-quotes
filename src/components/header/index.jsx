import './style.css'
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className="headerStrip">
            <img src={logo} alt="logo"/>
            <p>Chuck Norris</p>
        </header>
    );
}