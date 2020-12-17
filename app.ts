const person: {
  name: string,
  age: number,
  nickname: string,
  hobbies:string[]
} = {
  name:"Peter",
  age:12,
  nickname: "P",
  hobbies:["swimming","soccer"]
}

for (const h of person.hobbies){
  console.log(h)
}

console.log(person)