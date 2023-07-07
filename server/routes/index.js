//importar express
const express= require('express');
const router = express.Router();
const contactanosController=require('../controllers/contactanosController')
module.exports=function(){
    router.get('/',(req,res)=>{
        res.render('index',{
            pagina:"JosueVigilStudio",
            seccion:"Inicio"

        });
    })

    router.get('/portafolio',(req,res)=>{
       res.render('portafolio',{
        pagina:"JosueVigilStudio",
        seccion:"Portafolio"

    });
    })  
    
    router.get('/contactanos',(req,res)=>{
        res.render('contactanos',{
            pagina:"JosueVigilStudio",
            seccion:"Contactanos"

        });
    })
    router.get('/sobremi',(req,res)=>{
        res.render('sobreMi',{
            pagina:"JosueVigilStudio",
            seccion:"sobre Mi"

        })
    })
    router.get('/portafolio/bodas',(req,res)=>{
        res.render('portafolio/bodas.pug')
    })
    router.get('/ninos',(req,res)=>{
        res.render('portafolio/ninos.pug')
    })
    router.get("/prebodas",(req,res)=>{
        res.render('portafolio/prebodas.pug')
    })
    router.get('/quinces',(req,res)=>{
        res.render('portafolio/quinces.pug')
    })
    router.get('/babyshower',(req,res)=>{
        res.render('portafolio/babyshower.pug')
    })
    router.get('/retratos',(req,res)=>{
        res.render('portafolio/retratos.pug')
    })
    router.post('/',contactanosController.contactanos)
    router.post('/contactanos',contactanosController.contactanos)
    return router

    
}