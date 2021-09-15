
function getUserData(){

   var usuario = document.getElementById("usuario").value
   var senha = document.getElementById("senha").value
   
   //http://localhost/unimensagem/get.php?usuario=diogo&senha=123456
   console.log('ok')
   return fetch(`http://localhost/unimensagem/get.php?usuario=${usuario}&senha=${senha}`)

}
