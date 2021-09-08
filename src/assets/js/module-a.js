import svg from '../images/bookmark.svg'
import jpg from '../images/butterfly.jpg'
import bigPng from '../images/image.png'
import smallPng from '../images/logo.png'

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


const arrayImages = [svg, jpg, bigPng, smallPng]

for (let i = 0; i < arrayImages.length; i++) {
  const root = document.getElementById('root')
  const img = document.createElement('img')
  img.setAttribute('src', arrayImages[i])
  root.appendChild(img)
}

