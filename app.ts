function add(n1: number,n2: number){
  if(typeof n1 ==="number" && typeof n2 ==="number"){
    return n1+n2
  }
  throw new Error("Invalid data type")
}

const n1="2"
const n2=3
const result = add(n1,n2)
console.log(result)