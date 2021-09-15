
function getUserData(){

   
   var usuario = document.getElementById("usuario").value
   var senha = document.getElementById("senha").value
   
   
   fetch(`http://localhost/unimensagem/get.php?usuario=${usuario}&senha=${senha}`, {method: "GET",
   headers: {
     //"Content-Type": "application/json",
     'Access-Control-Allow-Origin:': '*'
   }})
   


//    let data = {"Username":"diogoantonio","Password":"ogoid369852471","IdSistema":"20"};

//     return fetch("https://publicws.unipam.edu.br/br.edu.unipam.core.unseg.api.Conexao/api/Autenticacao/Acessar", {
//     method: "POST", 
//     headers: {
//         "Content-Type": "application/json",
//         'Access-Control-Allow-Origin:': '*'
//       },
//     body: JSON.stringify(data)
//     }).then(res => {
//     console.log(JSON.parse(res))
//     });

//     req()

}
