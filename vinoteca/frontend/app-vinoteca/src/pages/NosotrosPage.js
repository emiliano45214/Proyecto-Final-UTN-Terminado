import React from "react";
import imagenSVG1 from "../imagenes/watering-plant-9.svg"
import imagenSVG2 from "../imagenes/couple-cb.svg"
import imagenSVG3 from "../imagenes/startup-77.svg"
import imagenPerfil from "../imagenes/linda-chica-dibujos-animados_18591-5089.jpg"
import imagenPerfil2 from "../imagenes/icono-hombre-joven-dibujos-animados_24908-23727.jpg"
import imagenPerfil3 from "../imagenes/istockphoto-672022124-170667a.jpg"
import "../styles/components/pages/NosotrosPage.css"

const NosotrosPage = (propt) => {
    return (
        <main className="holder">
        <div className="info-sobre-nosotros">
            <h2>Un poco acerca de nosotros</h2>
            <p>Somos una pareja de amantes del vino que se unieron para crear una vinoteca que ofrezca una experiencia única y memorable a nuestros clientes. Nos apasiona el vino y creemos que es una bebida que puede ser disfrutada por todos, independientemente de su nivel de experiencia o conocimiento. Creemos que el vino es una bebida que puede ser disfrutada por todos y nos comprometemos a ofrecer una experiencia de compra personalizada y memorable para cada cliente.</p>
        </div>
        <div className="contenedor-svg-about">
            <div className="svg">
                <img src={imagenSVG1} alt=""/>
                <h3>
                    cuidado al medio ambiente
                </h3>
                <p>
                ¡Claro! El cuidado del medio ambiente es de vital importancia en la creación de vinos. La industria vitivinícola ha tomado conciencia de la necesidad de adoptar prácticas sostenibles y respetuosas con el entorno natural. 
                </p>
            </div>
            <div className="svg">   
                <img src={imagenSVG2} alt=""/>
                <h3>
                    Eventos
                </h3>
                <p>
                Recuerda que la degustación de vinos es una experiencia subjetiva y personal. No hay reglas estrictas, así que disfruta y explora tus propias preferencias. Siempre es divertido aprender sobre nuevos vinos y expandir nuestro paladar. ¡Salud!
                </p>
            </div>
            <div className="svg">
                <img src={imagenSVG3} alt=""/>
                <h3>
                    Justos
                </h3>
                <p>
                ¡Bienvenido a nuestra tienda de vinos! Aquí nos esforzamos por ofrecer precios justos en todos nuestros productos. Sabemos que encontrar un buen vino a un precio razonable puede ser todo un desafío, pero estamos aquí para ayudarte.</p>
            </div>
        </div>
        <div className="personal">
            <h2>
                Nuestro grupo de trabajo
            </h2>
            <div className="contenedor-de-carta">
                <div className="container">
                    <div className="card-presentacion">
                        <img src={imagenPerfil} alt="guille Deluxe"/>
                        <h1>Guillermina tagliari</h1>
                        <h2>Jefa-vinoteca</h2>
                        <p className="TextoPrecentacion">Mi enfoque se basa en tres pilares fundamentales: calidad, selección y servicio. Estoy comprometida a ofrecerles los mejores vinos, cuidadosamente seleccionados de las prestigiosas regiones vinícolas de todo el mundo. </p>
                    </div>
                </div>
                <div className="container">
                    <div className="card-presentacion">
                        <img src={imagenPerfil2} alt="guille Deluxe"/>
                        <h1>Sebastian Lagrania</h1>
                        <h2>Jefe-vinoteca</h2>
                        <p className="TextoPrecentacion">Es un placer dirigirme a usted para presentarme, un profesional apasionado por el mundo del vino y con una amplia experiencia en el sector. Me complace expresar mi interés en formar parte de su equipo como jefe de vinoteca.</p>
                    </div>
                </div>
                <div className="container">
                    <div className="card-presentacion">
                        <img src={imagenPerfil3} alt="Chyno Deluxe"/>
                        <h1>Emiliano Brizio</h1>
                        <h2>Creador del sitio</h2>
                        <p className="TextoPrecentacion">Es un gusto formar parte de este equipo de trabajo llevando a cabo la realización del sitio web, tanto la parte visual como la lógica detrás de esta página para que todo funcione correctamente. ¡Espero que el diseño sea agradable e intuitivo!</p>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    );
}
export default NosotrosPage;