document.addEventListener("DOMContentLoaded", function () {
    var texts = ["Я люблю тебя, солнышко ❤️", "Я хочу тебе сказать, что ты лучшее, что случалось со мной", "Еще полгода назад, я и подумать не мог, что буду с таким чудом строить будущее", "Хочу сказать, что ты самая лучшая девочка на этой планете!", "И в этот замечательный день, вместо тысячи слов, я хочу пожелать тебе только самого наиулчшего!", "Хочу пожелать тебе здоровья, это все-таки самое главное. Но и про счастье тоже нельзя забывать!", "Извини, что я не такой романтичный, хотел показать свою любовь как-то особенно...", "И ничего лечше..", "Хотя лучше я просто скажу тебе:", "Спасибо, что ты существуешь в моей жизни", "Я тебя правда, очень сильно люблю и поздравляю с днем рождения!"];
    var textContainer = document.getElementById("typing-text");
    var paragraph = textContainer.querySelector("p");
    var textIndex = 0;
    var index = 0;
    var deleting = false;

    function typeEffect() {
        let currentText = texts[textIndex];

        if (!deleting) {
            if (index < currentText.length) {
                paragraph.textContent += currentText.charAt(index);
                textContainer.style.width = `${paragraph.offsetWidth + 20}px`;
                index++;
                setTimeout(typeEffect, 100); // Скорость печатания
            } else {
                setTimeout(() => {
                    deleting = true;
                    typeEffect();
                }, 2000); // Ждём 10 секунд перед удалением текста
            }
        } else {
            if (index > 0) {
                paragraph.textContent = currentText.substring(0, index - 1);
                textContainer.style.width = `${paragraph.offsetWidth - 20}px`;
                index--;
                setTimeout(typeEffect, 50); // Скорость удаления
            } else {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length; // Переход к следующему тексту
                setTimeout(typeEffect, 1000); // Пауза перед началом нового текста
            }
        }
        
    }
    setTimeout(typeEffect, 2000); // Задержка перед началом анимации
});
