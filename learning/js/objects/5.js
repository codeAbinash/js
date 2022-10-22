function Fruit(name, color) {
    this.name = name
    this.color = color
}

const favFruit = new Fruit('Apple', 'Green')
console.log(`See there is a ${favFruit.color} ${favFruit.name}.`)