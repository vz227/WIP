const date = new Date();

date.setDate(1);

const monthDays = document.querySelector('.days');

const lastDay = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

console.log(date.getDay());

const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();

const firstDayIndex = date.getDay();

const months = [
    "Просинец",
    "Съчен",
    "Сух",
    "Брязок",
    "Тръвен",
    "Изок",
    "Чръвен",
    "Орач",
    "Руен",
    "Листопад",
    "Груден",
    "Студен",
];

document.querySelector('.date h2').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = date.toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
}

for(let i = 1; i <= lastDay; i++) {
    days += `<div>${i}</div>`;
    monthDays.innerHTML = days;
}