//object literals:
const jsuser={
    name:"shyam",
    age:20,
    city:"waaji city",
    isLoggedIn:false
}
// console.log(jsuser.name)
// console.log(jsuser["name"])//best way to retrieve
jsuser.greeting=function(){
        console.log(`hi my age is ${this.age}`)
}
jsuser.greeting()//Function Call