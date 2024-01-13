import logo from '../assests/images/logo.png';
import Button from './button';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>Games</li>
                <li>
                    <label for="browseGames">Browse Games</label>
                    <select id="browseGames"></select>
                </li>
                <li>Store</li>
            </ul>
            <div className='button'>
                <Button buttonText={"Sign Up"} className={"signUp"} />
                <Button buttonText={"Login"} className={"login"} />
            </div>
        </div>
    )
}
export default Navbar;