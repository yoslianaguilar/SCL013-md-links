
// muestra los link
const fs = require('fs');
const regEx = /(((https?:\/\/)|(http?:\/\/)|(www\.))[^\s\n]+)(?=\))/gi;
fs.readFile("README.md", "utf-8", (e,file) => {
  if (e){
    console.log(e);
  }else{
    const linkFound = file.match(regEx)
    console.log(linkFound);
  }
})


// lee el directorio
const file = fs.readdir('./',(error, file)=>{
  if (error){
    throw error;
  }
  console.log('me trae la lista de archivos',file)



 // lee el readme
  fs.readFile('./README.md', 'UTF-8', (error, archivo)=>{
    if (error){
      throw error;
    }
    console.log ('Contenido del archivo \n', archivo);
  })
  //console.log('Contenido de Archivo');
});





/*
//Validar que un archivo existe
const archivo = 'README.md'
const valideFile = fs.access( archivo, fs.constants.F_OK, (err) =>{
if(err){
  console.log('El archivo no existe');
}else{
  console.log('El archivo si existe');

}
})
*/