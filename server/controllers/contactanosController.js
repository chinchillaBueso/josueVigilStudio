require('dotenv').config({path: 'variables.env'})

    const accountSid = process.env.ID;
    const authToken = process.env.TOKEN;
    const client = require('twilio')(accountSid, authToken);
    
exports.contactanos=async (req,res)=>{
    let {nombre , correo ,telefono , mensaje} =req.body;
    try {
        const response =await client.messages
        .create({
            body: 'CONTACTANOS----Nombre:'+" "+nombre+" Correo: "+correo+" Telefono: "+telefono+" Mensaje:" +mensaje,
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+50498823990'
        });
        if(res.locals.ruta==="/"){
            res.redirect('/')
        }else{
            res.redirect('/contactanos')
        }
    } catch (error) {
        console.log(error);
    }

}