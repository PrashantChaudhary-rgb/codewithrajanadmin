console.log('this is working');
let alert=document.getElementById('alert');
alert.style.display='none';
let browse_btn=document.getElementById("input-btn");
let input_file=document.getElementById("input-file");
let drop_zone=document.querySelector('.drop-zone');
const APP_BASE_URL= "https://file-sharing-myfirst.herokuapp.com/";
const uploadURL = `${APP_BASE_URL}api/files`;
const paperurl=`${APP_BASE_URL}sendall`;

drop_zone.addEventListener('dragover',(e)=>
{
    e.preventDefault();
    if(!drop_zone.classList.contains('dragged'))
    drop_zone.classList.add('dragged');
    
});
drop_zone.addEventListener('dragleave',()=>
{
    drop_zone.classList.remove('dragged');
});
drop_zone.addEventListener('drop',(e)=>{
    e.preventDefault();
    drop_zone.classList.remove('dragged');
    console.log(e);
    const file=e.dataTransfer.files;
    console.log(file);
   
    if(file.length)
    {
        console.log('file store wale function ko call karenge ab');
        input_file.files=file;
        console.log(input_file.value);
        uploadfile();
    }
    
});


browse_btn.addEventListener('click',()=>
{
    input_file.click();
})
input_file.addEventListener("change",()=>{
    uploadfile();
});

const uploadfile=()=>
{
var data=new FormData();
data.append('myfile',input_file.files[0])

fetch(uploadURL,
{
    method:'POST',
    body:data
}).then(
    response => response.json() 
  ).then(function(data){ showalert()});
}

function showalert()
{
    alert.style.display='block';
    setTimeout(() => {
        alert.style.display='none';
    },2000);
}
