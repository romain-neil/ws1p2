const container = document.querySelector(".container")
const coffees = [
    {name: "Macbook Pro M1 Pro", image: "images/coffee1.jpg"},
    {name: "MacBook Air 13", image: "images/coffee2.jpg"},
    {name: "iPhone 13 Pro", image: "images/coffee3.jpg"},
    {name: "iPhone 14", image: "images/coffee4.jpg"},
    {name: "iPhone 14 Stelaire", image: "images/coffee5.jpg"},
    {name: "Pixel 6 Pro", image: "images/coffee6.jpg"},
    {name: "Pixel 7 Pro", image: "images/coffee7.jpg"},
    {name: "Xiami 12 Pro", image: "images/coffee8.jpg"},
    {name: "Xiamo Redmi Note 11 Pro", image: "images/coffee9.jpg"},
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({name, image}) =>
            (output += `
                 <div class="card">
                     <img class="card--avatar" src=${image} />
                     <h1 class="card--title">${name}</h1>
                     <a class="card--link" href="#">Buy</a>
                 </div>
            `)
    )
    container.innerHTML = output
}
document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/ws1p2/serviceWorker.js")
            .then(() => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}