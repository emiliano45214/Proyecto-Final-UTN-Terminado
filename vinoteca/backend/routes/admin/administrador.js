var express = require('express');
var router = express.Router();
var catalogoVinosModel = require('../../models/catalogoVinosModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destruirIMG = util.promisify(cloudinary.uploader.destroy);


/* GET home page. */
router.get('/', async function(req, res, next) {

  var catalogoVinos = await catalogoVinosModel.traerCatalogoVinos();

  catalogoVinos = catalogoVinos.map(producto=>{
    if(producto.img_id){
      const imagen = cloudinary.image(producto.img_id, {

        crop: 'fill'

      });
      return{
        ...producto,
        imagen
      }
    }else{
      return{
        ...producto,
        imagen: ''
      }
    }
  });


  res.render('admin/administrador', { 
    layout: 'admin/layout',
    persona: req.session.usuario,
    catalogoVinos
    });

});

router.post('/', async(req, res, next)=>{
  console.log(req.body);
  try{

    let img_id = '';
      // console.log(req.body)
    if(req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }


    if(req.body.nombre != "" &&  req.body.marca != "" && req.body.precio != "" && req.body.clasificacion != ""  ){
      // console.log(req.body);
      await catalogoVinosModel.insertarNuevoProducto({
        ...req.body,
        img_id
      });
      res.redirect('/admin/administrador')
    }else{
      res.render("admin/paginaError", {
        layout: 'admin/layout',
        error: true,
        message: "¡Campos incompletos. Al cargar un nuevo producto es necesario que todos los campos esten completos!"
      })
    }
  }catch(error){
    console.log(error)
    res.render("admin/paginaError", {
      layout: 'admin/layout',
      error: true,
      message: "¡Tuvimos un problema, vuelve a intentarlo mas tarde!"})
  }
});




router.get('/eliminar/:id', async (req, res, next)=>{
  var id = req.params.id;
  var producto = await catalogoVinosModel.TraerProductoPorId(id);
  if(producto.img_id){
    await (destruirIMG(producto.img_id));
  }

  await catalogoVinosModel.borrarProductoPorId(id);
  res.redirect('/admin/administrador')
});


router.get('/modificar/:id', async (req, res, next)=>{
  var id = req.params.id;
  var producto = await catalogoVinosModel.TraerProductoPorId(id);

  res.render('admin/modificar', {
    layout:'admin/layout',
    producto
  })
});


router.post('/modificar', async (req, res , next)=>{
  try{

    let img_id = req.body.imagen_original;

    let borrarImagenVieja = false;

    if(req.body.imagen_delete === "1"){
      img_id = null;
      borrarImagenVieja = true;
    } else {
      if(req.files && Object.keys(req.files).length > 0){
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrarImagenVieja = true;
      }
    } if(borrarImagenVieja && req.body.imagen_original){
      await(destruirIMG(req.body.imagen_original));
    }

    var obj = {
      nombre: req.body.nombre,
      marca: req.body.marca,
      clasificacion: req.body.clasificacion,
      precio: req.body.precio,
      img_id
    }
    console.log(obj);

    await catalogoVinosModel.modificarDatosDeProducto(obj, req.body.id);
    res.redirect('/admin/administrador');
  }catch (error){
    console.log(error)
    res.render('admin/modificar',{
      layout:'admin/layout',
      error: true,
      message:'No se modifico la novedad'
    })
  }
})








module.exports = router;