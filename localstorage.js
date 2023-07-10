let one=document.getElementById('one');
let two=document.getElementById('btn');

two.onclick=function(){
    sum()
}
function sum(){

    let name=prompt('enter your name')
    localStorage.setItem('name',name)
    one.innerHTML='Hai'+" "+name;


}

if(!localStorage.getItem('name')){
    sum()
}
else{
    let val=localStorage.getItem('name')
    one.innerHTML='Hai'+" "+name;
}

