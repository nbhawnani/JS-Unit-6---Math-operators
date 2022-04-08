function GenerateResult(){

console.log(document.getElementById("op1").value +  document.getElementById("operator").value+document.getElementById("op2").value); 

if (document.getElementById("op2").value.length>0){
      document.getElementById("result").value=eval(document.getElementById("op1").value +      document.getElementById("operator").value+document.getElementById("op2").value);
} 

}

  
