function add(n1: number,n2: number, validInput: boolean){
  // if(typeof n1 !=="number" && typeof n2 !=="number"){
  //   throw new Error("Invalid data type")
  // }
  if(validInput){
    return n1+n2 
  }
  return "ERROR"
}

const n1=2
const n2=3
const validate = true
const result = add(n1,n2,validate)
console.log(result)