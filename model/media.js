class Media {
  constructor(){
    this.player         = "";
    this.ctrl           = "";
    this.video          = [];
    this.media          = {};//{"playlist": [], "command":""};
    /* Comandos testados até agora:
       --device 'Nome do Chromecast'
       Para carregar as legendas, basta ter o arquivo.srt com o mesmo nome do vídeo no mesmo diretório.
       Exemplo: "command":"--device 'Sala'"
       Testado com sucesso somente para vídeos MP4...por enquanto...
     */
  }
  setPlayer(player){
    this.player = player;
  }
  setCtrl(ctrl){
    this.ctrl = ctrl;
  }
  setVideo(){
    this.video = video;
  }
  setMedia(media){
    this.media = media;
  }
  getPlayer(){
    return this.player;
  }
  getCtrl(){
    return this.ctrl;
  }
  getVideo(){
    return this.video;
  }
  getMedia(){
    return this.media;
  }

}

module.exports.Media = Media;
