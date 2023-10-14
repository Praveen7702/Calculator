let output=document.getElementById("inputext")
let calculate=(number)=>{
    output.value+=number;
}

let result=()=>{
    try{
        output.value=eval(output.value)

    }
    catch(err){
        alert("Please Enter The valid Input")
    }
}

function clr(){
    output.value="";
}

function del(){
    output.value=output.value.slice(0,-1);
}