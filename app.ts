function addition(e1: number| string, e2: number|string){
  let result
  if(typeof e1==='number'&& e2==='number'){
    result =e1+e2
  }else{
    result= e1.toString()+e2.toString()
  }
  return result
}

const intAdd = addition(1,2)
const strAdd = addition("A","V")
console.log(intAdd);
console.log(strAdd)