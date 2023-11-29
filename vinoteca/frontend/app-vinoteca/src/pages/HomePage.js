import React from "react";
import imgBienvenida from "../imagenes/imagen-de-vinos.jpg"
import "../styles/components/pages/HomePage.css"

const HomePage = (propt) => {
    return (
        <main className="holder">
            <img className="imgHome" src={imgBienvenida} alt="imagen bienvenida" />
            <div className="columnas">
                <section className="bienvenida">
                    <h2>Bienvenidos</h2>
                    <p>Nos complace mucho tenerlos aquí y ser su guía en el fascinante mundo del vino. No importa si son principiantes o expertos en la materia, nuestra página está diseñada para todos los amantes del vino. Estamos aquí para responder sus preguntas, servirles como fuente confiable de información y acompañarles en su viaje de descubrimiento y exploración. ¡Esperamos que encuentren todo lo que están buscando y que se conviertan en verdaderos apasionados del vino!</p>
                </section>
                <section className="artesanias">
                    <h2>Productos artesanales</h2>
                    <div><p>Los vinos artesanales son auténticas obras maestras enológicas. El proceso de producción artesanal involucra un cuidado meticuloso en cada etapa, desde el cultivo de las uvas hasta la fermentación y el embotellado. Cada botella de vino artesanal es el resultado de la pasión y el conocimiento profundo de los viticultores y enólogos que lo elaboran.</p></div>
                </section>
            </div>
        </main>
    );
}
export default HomePage;