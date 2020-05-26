//****************** first  solution *************

var light_items = document.getElementsByClassName('lightItem')
let active = 0;

setInterval(function () {
        light_items[active].className = "lightItem"
        active++

        if (active === light_items.length  ){
            active = 0
        }

        const current_light = light_items[active]

        current_light.classList.add(current_light.getAttribute('id'))

    },1000);

//****************** second  solution *************
//
// var red = document.getElementById('red')
// var yellow = document.getElementById('yellow')
// var green = document.getElementById('green')
//
// function trafficLight() {
//
//     red.style.backgroundColor = "grey"
//     yellow.style.backgroundColor = "gray"
//     green.style.backgroundColor = "grey"
//
//     setTimeout(function () {
//         red.style.backgroundColor = "red"
//         yellow.style.backgroundColor = "gray"
//         green.style.backgroundColor = "gray"
//     }, 1000)

//     setTimeout(function () {
//         red.style.backgroundColor = "grey"
//         yellow.style.backgroundColor = "yellow"
//         green.style.backgroundColor = "grey"
//     }, 2000)

//     setTimeout(function () {
//         red.style.backgroundColor = "grey"
//         yellow.style.backgroundColor = "gray"
//         green.style.backgroundColor = "green"
//     }, 3000)
// }
// setInterval(trafficLight, 3000)
