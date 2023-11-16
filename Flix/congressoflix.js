var listaFilmes = [
    "https://cinema10.com.br/upload/filmes/filmes_3494_Psicopata%20Americano.jpg",
    "https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg",
    "https://img.elo7.com.br/product/zoom/2677256/big-poster-filme-homem-de-ferro-3-lo04-tamanho-90x60-cm-presente-geek.jpg",
    "https://m.media-amazon.com/images/I/61-2G84LF-L._AC_UF1000,1000_QL80_.jpg"]

listaFilmes.push( "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_UF1000,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
)             
var nomeFilmes = [
    "Psicopata Americano",
    "Homem Aranha Longe de Casa",
    "Homem de Ferro 3",
    "Batman",
    "Interstellar",
    "Inception"
]

 var i = 0

for(var i = 0; i<listaFilmes.length; i++){
    document.write("<div class='filme'>")
    document.write('<img src=' + listaFilmes[i] + '>' );
    document.write("<p class='nome-filme'>"+nomeFilmes[i]+"</p>");
    document.write('</div>');
    }
//i=i+1 também pode ser subistituido por i++
