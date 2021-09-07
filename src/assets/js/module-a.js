class Car {
  constructor(brand, color) {
    this.name = brand
    this.color = color
  }
}

const bmw = new Car('BMW', 'red')
const ford = new Car('Ford', 'blue')

const root = document.getElementById('root')
root.innerHTML = `<p>My new car is ${bmw.name} and the color is ${bmw.color}</p>`
root.innerHTML += `<p>My new car is ${ford.name} and the color is ${ford.color}</p>`