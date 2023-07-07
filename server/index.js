//exportar express
const express = require('express');
const routes = require('./routes');
const path=require('path');
const bodyParser=require('body-parser')
//configurar express
const app = express();

//crear carpeta estatica public
app.use(express.static('public'))
//habilitar pug
app.set('view engine','pug');
app.set('views',path.join(__dirname,'./views'));


//mostrar fecha
app.use((req,res,next)=>{
    const fecha=new Date();
    res.locals.fechaActual=fecha.getFullYear();
    res.locals.ruta=req.path;
    return next();
})

//ejecutar bodyparser
app.use(bodyParser.urlencoded({extended:true}));
//cargar las rutas
app.use('/',routes());


//configuracion de puerto y servidor
const servidor= process.env.HOST || '0.0.0.0';
const puerto = process.env.PORT || 3000;
app.listen(puerto,servidor,()=>{
    console.log('Servidor Corriendo Correctamente!')
});