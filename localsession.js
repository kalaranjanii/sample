localStorage.setItem('name','ranjani')
localStorage.setItem('stuname','kala')
localStorage.getItem('name')

localStorage.removeItem('stuname')

localStorage.clear()


localStorage.setItem('name',JSON.stringify({name:'kala'})) //json.stringify->convert object to string
localStorage.setItem('fname',JSON.stringify({fname:'ranj'}))

JSON.parse(localStorage.getItem('fname')) //json.parse->display an object

JSON.parse(localStorage.getItem('name'))



function mySave() {
    var txt = document.getElementById("input").value;
    localStorage.setItem("name", txt);    
    document.getElementById("input").value=""

    if(txt==""){
        alert('enter a value');
    }
    else{
        document.getElementById('ans').innerHTML=txt;
    }

  

  }


  let stu={name:'ranjani',sub:'eng',mark:90}

  let score=[34,65,76,87,85];
  localStorage.setItem('result',stu.name);
  localStorage.setItem('marks',JSON.stringify(score))


let data1=localStorage.getItem('result');
let data2=localStorage.getItem('marks');
console.log(data1);
console.log(data2);


arr='["kala","ranjani"]';

arr1=JSON.parse(arr);
document.getElementById('demo').innerHTML=arr1;






