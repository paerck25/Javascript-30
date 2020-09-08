const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.minutes');
const secHand = document.querySelector('.seconds');

const setTime = () => {
    const now = new Date();
    const hourDgree = now.getHours() / 12 * 360 + 90;
    const minDgree = now.getMinutes() / 60 * 360 + 90;
    const secDgree = now.getSeconds() / 60 * 360 + 90;
    hourHand.style.transform = `rotate(${hourDgree}deg)`
    minHand.style.transform = `rotate(${minDgree}deg)`
    secHand.style.transform = `rotate(${secDgree}deg)`
}

const tiktok = () => {
    const now = new Date();
    const hourDgree = now.getHours() / 12 * 360 + 90;
    const minDgree = now.getMinutes() / 60 * 360 + 90;
    const secDgree = now.getSeconds() / 60 * 360 + 90;
    console.log(now.getHours(), now.getMinutes(), now.getSeconds());
    secHand.style.transform = `rotate(${secDgree}deg)`
    if (now.getSeconds() === 0) {
        hourHand.style.transform = `rotate(${hourDgree}deg)`
        minHand.style.transform = `rotate(${minDgree}deg)`
    }
}



setTime();
setInterval(tiktok, 1000);