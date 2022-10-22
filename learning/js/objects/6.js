function _fruit_object_set_color(color) {
    this.color = color
}

function Fruit(name) {
    this.name = name
    this.setColor = _fruit_object_set_color
}

const f = new Fruit('Mango')
f.setColor('Yellow')

console.log(`${f.color} ${f.name}`)