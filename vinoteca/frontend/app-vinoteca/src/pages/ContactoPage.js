import React from "react";
import imagenContacto from "../imagenes/reading-a-book (2).svg";
import "../styles/components/pages/ContactoPage.css";

const ContactoPage = (propt) => {
    return (
        <main className="">
        <div className="contenido-de-contacto">
            <div className="portada">
                <div className="textos-contacto">
                    <h2>Contactanos</h2>
                    <p>En el siguente apartado podras encontrar dos diferentes formularios para contactarnos, Uno para posibles eventos y el otro para inconvenientes con el sitio!</p>
                </div>
                <div className="imagen-contacto">
                    <img src={imagenContacto} alt=""/>
                </div>
                
            </div>
            <div className="wave" style={{height: "150px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "rgb(255, 255, 255)"}}></path></svg></div>
            <div><div className="wave2" style={{height: "150px", overflow: "hidden"}} ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "rgb(255, 255, 255)"}}></path></svg></div></div>
        </div>
        <div className="informacionExtra-contacto">
            <div className="info-1">
                <h3>
                    ¡Organiza un evento!
                </h3>
                <p>Si te gustaria organizar un evento junto a nosotros, como degustaciones o una compra para un gran festejo te invitamos a acceder al siguiente formulario!</p>
                <a href="/eventos">Formulario de contacto</a>
            </div>
            <div className="info-2">
                <h3>
                    ¡Inconvenientes!
                </h3>
                <p>Este formulario es un buen punto de partida para recopilar información sobre los inconvenientes que experimentan los usuarios en la pagina web. La información proporcionada en este formulario puede ayudar a los equipos de soporte a identificar la causa del problema y desarrollar una solución.</p>
                <a href="/inconvenientes">Formulario de contacto</a>
            </div>
        </div>
    </main>
    );
}
export default ContactoPage;