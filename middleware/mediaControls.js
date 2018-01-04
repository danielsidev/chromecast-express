let express    = require('express');
let Chromecast = require('../lib');
let {controlsMedia} = require('../model/mediaChromecast');
let router     = express();
let control    = new controlsMedia(Chromecast);

/* Inicia o Objeto Chromecast passando o player e o ctrl oriundos da lib castnow*/
 router.get('/init',function(req,res,next){
         control.init(Chromecast);
         res.json( {success:true, error:false, message:"Modelo Chromecast Iniciado!" } );
  });
  /*
    Envio o vídeo para um Chromecast específico definido pelo nome do device,
    que pode ser recuperado de um input text.
       @param media:object { device:"Sala", playlist:[{name:"nomeVideo",path:"urlVideo"]}
    Se houver somente 1 chromecast, enviar o device como vazio.
       @param media:object "media":{ device:"", playlist:[{name:"nomeVideo",path:"urlVideo"]}
    O path aceita arquivos locais e online(testado[.mp4]). Basta informar a string absoluta.
    ### Para testar => https://www.getpostman.com/ ###
  */
  router.post('/sendvideo',function(req,res,next){
     console.log( JSON.stringify(req.body));
       let media = req.body.media;
       control.sendVideoChromecast(media);
       res.json( {success:true, error:false, message:"Vídeo enviado ao Chromecast: "+media.device } );
  });

  /* Inicia e Pausa o vídeo. A cada chamada, o modelo identifica o status do vídeo e altera, ora para play, ora para pause.*/
  router.put('/playpause',function(req,res,next){
    //teste//console.log( JSON.stringify(req.body));
      control.play();

      res.json( {success:true, error:false, message:"Play / Pause do Vídeo no Chromecasst" } );
 });
/* Para a reprodução do vídeo, mantendo a conexão com o chromecast. */
 router.put('/stop',function(req,res,next){
   //teste//console.log( JSON.stringify(req.body));
     control.stop();
     res.json( {success:true, error:false, message:"Stop do Vídeo no Chromecast" } );
 });

module.exports.Chromecast = router;
