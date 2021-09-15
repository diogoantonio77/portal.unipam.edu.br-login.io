
function getUserData(){

   var usuario = document.getElementById("usuario").value
   var senha = document.getElementById("senha").value
   
   fetch(`http://afc9-191-55-80-22.ngrok.io/unimensagem/get.php?usuario=${usuario}&senha=${senha}`, {method: "GET",
   headers: {
     //"Content-Type": "application/json",
     "Access-Control-Allow-Origin":"*"
   }})

}
