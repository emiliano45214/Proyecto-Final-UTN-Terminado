import react from "react";
import logo from "../../imagenes/vinoteca-logo-removebg-preview.png";
import "../../styles/components/layout/footer.css";
import "https://kit.fontawesome.com/4ffb8edd00.js";

const Footer = (props) => {
    return (
        <footer>
        <div className="holder">
            <img src={logo} alt="logo-pagina"/>
            <div className="div-info">
                <div className="envios">
                    <h3>Envios</h3>
                    <a href="">Proximamente...</a>
                    <a href="">Proximamente...</a>
                    <a href="">Proximamente...</a>
                </div>
                <div className="info-footer">
                    <h3>Info</h3>
                    <a href="">Proximamente...</a>
                    <a href="">Proximamente...</a>
                    <a href="">Proximamente...</a>
                </div>
                <div className="terminos">
                    <h3>Terminos</h3>
                    <a href="">Proximamente...</a>
                    <a href="">Proximamente...</a>
                    <a href="">Proximamente...</a>
                </div>
            </div>
            <div className="iconos">
                
                <a href="https://www.instagram.com/almacendevinosllambicampbell/"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100057569524407"><i className="fa-brands fa-facebook"></i></a>
                
                
            </div>
        </div>
    </footer>
    );
}
export default Footer;