var express = require('express');
var router = express.Router();
var usuariosModel = require('./../models/usuariosModel');

router.get('/', function(req, res, next) {
  res.render('admin/login',{
    layout:'admin/layout'
  });
});

module.exports = router;

router.post('/', async (req, res, next) => {
  try {
  var usuario = req.body.usuario; // capturando la info //flavia
  var password = req.body.password; //1234

  var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

  if (data != undefined) {

    req.session.id_usuario =data
    req.session.nombre = data.usuario;

  res.redirect('/admin/novedades');
  } else {
  res.render('admin/login', {
  layout: 'admin/layout',
  error: true
  });
}
  } catch(error){
    console.log(error);
  }

});