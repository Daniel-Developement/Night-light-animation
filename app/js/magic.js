const car = document.querySelector('.vehicle');

const light = () => {
    car.src = './app/img/van-led.png';
}

document.addEventListener('keydown', light);