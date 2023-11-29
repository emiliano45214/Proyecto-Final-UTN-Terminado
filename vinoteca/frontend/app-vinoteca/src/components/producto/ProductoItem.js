import React from "react";


const ProductoItem = (props) =>{
    const {nombre, marca, clasificacion, precio, imagen,} = props;

    return(
        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src={imagen}/></div>
                                <div class="card_content">
                                    <h2 class="card_title"><p>Nombre:</p> {nombre}</h2>
                                    <h2 class="card_text"><p>Marca:</p> {marca}</h2>
                                    <h2 class="card_text"><p>Clasificacion:</p> {clasificacion}</h2>
                                    <h2 class="card_text"><p>Precio:</p> ${precio}</h2>

                                </div>
                            </div>
                        </li>
    );
}

export default ProductoItem;