Chromecast-Express
==============

Um middleware com express para compartilhar vídeos com o chromecast baseado na [library castow](https://github.com/xat/castnow) com Nodejs.

> *A ideia é ir evoluindo para incluir mais recursos da library base, com o tempo. Por ora temos o básico para alimentar um cliente web, desktop ou mobile.*

Estrutura de Rotas
==============
#### http://localhost:32300/chromecast
|   Método      |     Caminho  |  Descrição  |
| ------------  | ------------ |------------ |
|   GET         | /init     | Inicia o módulo do chromecast |
|               |              |             |
|   POST        | /sendvideo   | Envia o vídeo para o chromecast |
|               |              |             |
|   PUT         | /playpause   | Executa o Play ou Pause a cada chamada |
|               |              |             |
|  PUT          | /stop        | Para a reprodução do vídeo |


### Instalação

1. Faça o download ou clone do projeto com `git clone https://github.com/danielsidev/chromecast-express.git`
2. Entre na pasta do projeto e instale as dependências com `npm install`
3. Rode a aplicação com `node app.js ou npm start`

### Testando a aplicação

- Importe o json que está dentro da pasta  **testes** para o **Postman**  => [Donwload do Postman Aqui!](https://www.getpostman.com/)
- Execute cada um dos teste, lembrando de alterar o teste do vídeo local pelo caminho de sua máquina( Pc ou Macos)

####Ordem de execução
1 `./init`  

2 `./sendvideo`

3 `./playpause` **Acionado pela primeira vez, executa o pause **

4 `./playpause` **Acionado pela segunda vez, executa o play **

5 `./stop`
### Escolhendo o Chromecast
Se você possuir mais de 1 chromecast e quiser enviar o vídeo para um device específico, informe o nome do chromecast na propriedade device do objeto enviado a rota  => **/sendvideo**:

```
    {
      "media": {
    		          "device":"Sala",
    		          "playlist":[{
    					    "name":"Vídeo de teste",
    					    "path":"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    					  }]
      				}
    }		  
```

Se existem somente 1 Chromecast, envie com a proriedade **device** em branco:

```
    {
      "media": {
    		          "device": ' ',
    		          "playlist":[{
    					    "name":"Vídeo de teste",
    					    "path":"http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    					  }]
      				}
    }		  
```
**Para vídeos locais informe o caminho absoluto**

```
    {
      "media": {
    		          "device":"Sala",
    		          "playlist":[{
    					    "name":"Vídeo de teste",
    					    "path":"/home/$USER(seu usuario)/videos/meu-video.mp4"
    					  }]
      				}
    }		  
```


### Sobre Legendas
Basta ter o arquivo-de-legeda.srt, com o mesmo nome do vídeo,  no mesmo diretório e ela será carregada automaticamente.
