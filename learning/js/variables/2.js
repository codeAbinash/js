var name = 'Abinash' // Here 'name' is a global variable

function sayHello(){
    var hello = 'Hello 👋🏻'
    // Here 'hello' is a local variable
    console.log(hello + ' ' + name)
}

sayHello()