import React from "react";
import "../styles/components/pages/CatalogoPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductoItem from "../components/producto/ProductoItem";
import imagenNoDisponible from "../imagenes/foto-no-disponible.jpg"





const CatalogoPage = (propt) => {

    const [loading, setLoading] = useState(false);
    const [Productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();
    }, []);

//     const [categoriaSeleccionada, setcategoriaSeleccionada] = useState({
//         tinto: false,
//         blanco: false,
//         espumante:false,
//         aperitivo:false
//     });
    
//     const[categoriaFiltrada, setcategoriaFiltrada] = useState([]);

// const checkboxOn = e=>{
//     setcategoriaSeleccionada({
//         ...categoriaSeleccionada,
//         [e.target.value]: e.target.checked
//     });
//     if(e.target.checked){
//         const resultadoCheckbox = ProductoItem().filter(item =>
//             item.clasificacion === e.target.value
//         )
//         setcategoriaFiltrada([
//             ...categoriaFiltrada, resultadoCheckbox
//         ])
//         console.log(categoriaFiltrada)
//     }


// }


    return (
        <main class="holder">
            <div class="columnas-catalogo">
                <section class="filtros-section">
                    <div class="">
                        <div class="titulo-buscador">
                            <h2>Filtros</h2>
                            <div class='container1' tabindex='1'>
      <div class='search-container' tabindex='1'>
        <input class="input1" placeholder='Buscardor' id="buscador" type='text'/>
        <a class='button1'>
          <i class='fa fa-search'></i>
        </a>
      </div>
    </div>
                        </div>

                        <div class="tabs">
                            <div class="tab">
                                <input type="checkbox" id="chck1" />
                                <label class="tab-label" for="chck1">Clasificacion.</label>
                                <div class="tab-content">
                                    <div class="contido-de-acordeon">
                                        <label for="">Proximamente... <input  type="checkbox" name="tinto" id="tinto" value="tinto" className="cheeckbox"/></label>
                                        <label for="">Proximamente... <input  type="checkbox" name="blanco" id="blanco" value="blanco" className="cheeckbox"/></label>
                                        <label for="">Proximamente... <input  type="checkbox" name="espumantes" id="espumantes" value="espumantes" className="cheeckbox"/></label>
                                        <label for="">Proximamente... <input  type="checkbox" name="aperitivo" id="aperitivo" value="aperitivo" className="cheeckbox"/></label>
                                    </div>
                                </div>
                            </div>
                            <div class="tab">
                                <input type="checkbox" id="chck2" />
                                <label class="tab-label" for="chck2">Precio.</label>
                                <div class="tab-content">
                                    <div class="contido-de-acordeon">
                                        <label for="">Proximamente... <input type="checkbox" name="" id="" /></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section-cards-vinos">

                    {

                        loading ? (
                            <p>cargando...</p>
                        ) : (
                            Productos.map(item => <ProductoItem key={item.id}
                                 nombre={item.nombre}
                                  marca={item.marca} 
                                  clasificacion={item.clasificacion}
                                   precio={item.precio}
                                    imagen={item.imagen || imagenNoDisponible } />)
                        )
                    }
                </section>
            </div>
        </main>
    );
}


    document.addEventListener('keyup', e=>{
        if(e.target.matches("#buscador")){
            document.querySelectorAll(".cards_item").forEach(letra =>{
                letra.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?letra.classList.remove("filtro1")
                :letra.classList.add("filtro1")
                
            })
        }
    });




export default CatalogoPage;