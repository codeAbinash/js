function _fruit_object_set_color(c) {
    with (this) {
        color = c
    }
}

function Fruit(name) {
    this.name = name
    this.setColor = _fruit_object_set_color
}

const fruit = new Fruit('Apple')
fruit.setColor('Red')