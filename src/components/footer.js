import logo from '../assests/images/logo.png';
import { Resources, menu, socialMedias } from '../constants/constants';
import Title from './title';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section-top">
                <div className="logo-container">
                    <img src={logo} alt="logo" />
                </div>
               
                <ul>
                <Title className={"footer-head"} titleText={"Menu"} />
                    {menu.map((item) => {
                        const { id, text } = item;
                        return (<li key={id}>{text}</li>)
                    })}
                </ul>
               
                <ul>
                <Title className={"footer-head"} titleText={"Resources"} />
                    {Resources.map((item) => {
                        const { id, text } = item;
                        return (<li key={id}>{text}</li>)
                    })}
                </ul>
              
                <div className="social">
                <Title className={"footer-head"} titleText={"Follow us on:"} />
                   <div className='social-medias'>  
                   {socialMedias.map((item) => {
                        const { id, media } = item;
                        return (
                     <div className="image-container" key={id}>
                            <img src={media} alt="medias" />
                           </div>
                            )
                       
                    })}
                   </div>
                </div>
            </div>
            <p className='copyright'><span>&#169; </span> 2024 Exstore</p>
        </div>
    )
}
export default Footer;