document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const stopButton = document.getElementById('stopButton');
    const exitButton = document.getElementById('exitButton');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackList = document.getElementById('feedbackList');
    const playButtons = document.querySelectorAll('.play-game-button');

    // Обработка кнопок игры
    playButton.addEventListener('click', () => {
        alert('Игра началась!');
        playButton.disabled = true;
        stopButton.disabled = false;
    });

    stopButton.addEventListener('click', () => {
        alert('Игра остановлена.');
        playButton.disabled = false;
        stopButton.disabled = true;
    });

    exitButton.addEventListener('click', () => {
        const confirmExit = confirm('Вы уверены, что хотите выйти?');
        if (confirmExit) {
            alert('Выход из игры.');
            window.close(); // Закрыть окно (работает не во всех браузерах)
        }
    });

    // Обработка формы отзывов
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение формы

        // Получаем данные из формы
        const name = document.getElementById('nameInput').value;
        const comment = document.getElementById('commentInput').value;

        // Создаём новый элемент отзыва
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        feedbackItem.innerHTML = `
            <h3>${name}</h3>
            <p>${comment}</p>
        `;

        // Добавляем отзыв в список
        feedbackList.appendChild(feedbackItem);

        // Очищаем форму
        feedbackForm.reset();
    });

    // Обработка кнопок "Играть" для игр
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const game = button.getAttribute('data-game');
            alert(`Вы выбрали игру: ${game}`);
            // Здесь можно добавить логику для перехода к конкретной игре
        });
    });
});