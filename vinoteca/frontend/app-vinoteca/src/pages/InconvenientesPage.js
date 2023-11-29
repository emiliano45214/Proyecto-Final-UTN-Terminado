import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/components/pages/InconvenientesPage.css"
const NovedadesPage = (propt) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
      }
      const [sending, setSending] = useState(false);
      const [msg, setMsg] = useState('');
      const [formData, setFormData] = useState(initialForm);
    
      const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
          ...oldData,
          [name]: value
        }));
      }
    
    
      const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/inconvenientes', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
          setFormData(initialForm)
        }
      }
    return (
        <main className="main">
      <div id="form-main">
        <div id="form-div">
          <h1>¡Ponte en contacto!</h1>
          <p>envianos tu inconveniente a travez del formulario.</p>
          <form className="form" id="form1" action="/eventos" method="post" onSubmit={handleSubmit}>

            <p className="name">
              <input name="nombre" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Nombre Completo" id="name" value={formData.nombre} onChange={handleChange} />
            </p>

            <p className="email">
              <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </p>
            <p className="name">
              <input name="telefono" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Telefono" id="name" value={formData.telefono} onChange={handleChange} />
            </p>

            <p className="text">
              <textarea name="mensage" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="descripcion del inconveniente" value={formData.mensage} onChange={handleChange}></textarea>
            </p>

            <div className="submit">
              <input type="submit" value="Enviar" id="button-blue" />
              <div class="ease"></div>
            </div>
            <div className="UltimoDiv">
              <a id="ancor" href="/contacto">Regresar</a>
              {sending ? <p>Enviando...</p> : null}
              {msg ? <p>{msg}</p> : null}
            </div>

          </form>

        </div>
      </div>
    </main>
    );
}
export default NovedadesPage;