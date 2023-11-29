var express = require('express');
var router = express.Router();
var catalogoVinosModel = require('./../models/catalogoVinosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');




router.get('/productos', async function(req, res, next){
    let productos = await catalogoVinosModel.traerCatalogoVinos();

    productos = productos.map(productos=>{
        if(productos.img_id){
            const imagen = cloudinary.url(productos.img_id, {
                width:400,
                height:400,
                crop:'fill'
            });
            return {
                ...productos,
                imagen
            }
        } else{
            return{
                ...productos,
                imagen: ''
            }
        }
    });

    res.json(productos);
});

router.post('/eventos', async (req, res) =>{
    const mail = {
        to: 'emilianobrizio2017@gmail.com',
        subject: 'contacto web',
        html: `${req.body.nombre} se contacto a travez de la web y este es su correo: ${req.body.email} <br> El evento que plantea es: ${req.body.mensage}<br> lo podes contactar mediante su telefono: ${req.body.telefono}.`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user:process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });


    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: '¡Mensage Enviado!'
    });
});

router.post('/inconvenientes', async (req, res) =>{
    const mail = {
        to: 'emilianobrizio2017@gmail.com',
        subject: 'contacto web',
        html: `${req.body.nombre} se contacto a travez de la web y este es su correo: ${req.body.email} <br> El INCONVENIENTE que plantea es: ${req.body.mensage}<br> este es su telefono: ${req.body.telefono}.`
    }
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user:process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });


    await transport.sendMail(mail)
    res.status(201).json({
        error: false,
        message: '¡Mensage Enviado!'
    });
});

module.exports = router;

