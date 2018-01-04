let {Media} = require('./media');
class MediaChromecast  extends Media{
    constructor(){
        super();
    }
    init(Chromecast){
       super.setPlayer(Chromecast.player);
       super.setCtrl(Chromecast.ctrl);
    }
    play(){
        super.getPlayer().attach(function(err, p) {
          if (p.currentSession.playerState === 'PLAYING') {
            p.pause();
          } else if (p.currentSession.playerState === 'PAUSED') {
            p.play();
          }
        });
    }
    stop(){
        super.getPlayer().attach(function(err, p) {
          p.stop();
        });
    }
    sendVideoChromecast(media) {
     let command=(media.device==null || media.device=="")? "":"--device '"+media.device+"'";
     let videos = media.playlist;
     let tam = videos.length;
     let playlist = [];
      if(tam >0){
          for(let i = 0;i<tam; i++) {
            let e     = videos[i].path.split('.');
            let ext   = e[e.length - 1];
            videos[i].path = videos[i].path;
            console.log("Vídeo com extensão => "+ext);
            let vi = {path:videos[i].path};
            playlist.push(vi);
          }
            let mediaNew = {"playlist":playlist, "command":command};
            super.setMedia(mediaNew);
            if(!playlist) {
              console.log('attaching...');
              super.getPlayer().attach(super.getMedia(), super.getCtrl());
            }else {
              console.log('launching...');
              super.getPlayer().launch(super.getMedia(), super.getCtrl());
            }
      }
    }

    bytesToSize(bytes) {
      let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0){return '0 Byte';}
          let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
            return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }
}

module.exports.controlsMedia = MediaChromecast;
