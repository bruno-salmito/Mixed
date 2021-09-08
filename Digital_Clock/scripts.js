let main = document.querySelector('main');
let icons = document.querySelector('.icons');

icons.onclick = () => {
    main.classList.toggle("dark");
}

// Função que vai rodar a cada segundo

setInterval(() => {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();


    // Verifica se am/pm

    let par = hour < 12 ? "AM" : "PM";

    // Opcional, formata as horas no formato am

    // hour = hour > 12 ? hour - 12 : hour;
    // hour = hour == 0 ? hour = 12 : hour;

    // Caso horas, minutos e segundos forem menores quie 10
    // adiciona o zero antes

    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".min").innerHTML = minutes;
    document.querySelector(".sec").innerHTML = seconds;
    document.querySelector(".am-pm").innerHTML = par;
}, 1000);
// 1000ms = 1s