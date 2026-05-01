// Данные команды студсовета
const teamData = {
    ilya: {
        name: 'Илья',
        role: 'Президент',
        image: 'images/image.png',
        birthday: 'Дата рождения',
        info: 'Президент студенческого совета. Лидер команды, представляет интересы студентов, принимает ключевые решения и координирует работу всех отделов.'
    },
    farid: {
        name: 'Фарид',
        role: 'Вице-президент',
        image: 'images/image.png',
        birthday: 'Дата рождения',
        info: 'Вице-президент студенческого совета. Правая рука президента, курирует основные проекты и замещает президента при необходимости.'
    },
    ervand: {
        name: 'Ерванд',
        role: 'Глава медиа отдела',
        image: 'images/image.png',
        birthday: 'Дата рождения',
        info: 'Глава медиа отдела. Отвечает за фото- и видеосъёмку мероприятий, ведение социальных сетей и информационное освещение деятельности совета.'
    },
    liza: {
        name: 'Лиза',
        role: 'Влиятельный человек',
        image: 'images/image.png',
        birthday: 'Дата рождения',
        info: 'Одна из ключевых фигур студенческого сообщества. Активно участвует в организации мероприятий и принятии важных решений.'
    },
    kristina: {
        name: 'Кристина',
        role: 'Влиятельный человек',
        image: 'images/image.png',
        birthday: 'Дата рождения',
        info: 'Влиятельный член команды. Вносит значительный вклад в развитие студенческого совета и реализацию масштабных проектов.'
    }
};
function showPersonModal(person) {
    // Удаляем старый модал если есть
    const oldModal = document.querySelector('.modal');
    if (oldModal) {
        oldModal.remove();
    }
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal__overlay"></div>
        <div class="modal__content">
            <div class="modal__close">&times;</div>
            <div class="modal__image">
                <img src="${person.image}" alt="${person.name}">
            </div>
            <h2 class="modal__name">${person.name}</h2>
            <p class="modal__role">${person.role}</p>
            <p class="modal__birthday">${person.birthday}</p>
            <p class="modal__info">${person.info}</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.add('modal--active');
    }, 10);
    
    // Закрытие по клику
    modal.querySelector('.modal__close').addEventListener('click', () => {
        closeModal(modal);
    });
    
    modal.querySelector('.modal__overlay').addEventListener('click', () => {
        closeModal(modal);
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
        }
    });
}

function closeModal(modal) {
    modal.classList.remove('modal--active');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// Цветное фото по нажатию на телефоне
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', function () {
                const img = this.querySelector('img');

                // убрать цвет со всех
                cards.forEach(c => {
                    c.querySelector('img').classList.remove('card__img--color');
                });

                // включить цвет у выбранной
                img.classList.add('card__img--color');
            });
        });
    }
});