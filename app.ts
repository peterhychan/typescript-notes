function addition(e1: number| string, e2: number|string, result: 'as-num'|'as-txt'){
  let res
  if(typeof e1==='number'&& e2==='number' || result==='as-num'){
    res =+e1 + +e2
  }else{
    res= e1.toString()+e2.toString()
  }
  return res
}

const intAdd = addition(1,2, 'as-num')
const strAdd = addition("A","V", 'as-txt')
console.log(intAdd);
console.log(strAdd)
console.log(typeof +"2")