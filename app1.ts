enum Role {
  ADMIN,
  USER,
  SUPERUSER
}

const person: {
  name: string,
  age: number,
  nickname: string,
  hobbies:string[],
  roles: Role
} = {
  name:"Peter",
  age:12,
  nickname: "P",
  hobbies:["swimming","soccer"],
  roles: Role.ADMIN
}


console.log(person)