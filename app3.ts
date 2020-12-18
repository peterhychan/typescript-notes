class Department{
  constructor(private readonly name: string, private people: string[]){
  }
  describe(this: Department){
    console.log(`DEPARTMENT: ${this.name} - HIRE: ${this.people.length}`)
  }
  addHire(person: string){
    this.people.push(person)
  }
}
const econ = new Department("Economics", ["Sam","Dan","Mark"]);
econ.describe()
