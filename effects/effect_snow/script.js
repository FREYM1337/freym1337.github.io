const snowContainer = document.getElementById('snow-container');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // Символ снежинки
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowContainer.appendChild(snowflake);

    // Удаляем снежинку после завершения анимации
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Создаем снежинки каждую 100 миллисекунд
setInterval(createSnowflake, 100);
