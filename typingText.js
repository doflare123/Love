document.addEventListener("DOMContentLoaded", function () {
    var texts = ["Я люблю тебя, солнышко ❤️", "Я хочу тебе сказать, что ты лучшее, что случалось со мной", "Еще полгода назад, я и подумать не мог, что буду с таким чудом строить будущее", "Хочу сказать, что ты самая лучшая девочка на этой планете!", "И в этот замечательный день, вместо тысячи слов, я хочу пожелать тебе только самого наиулчшего!", "Хочу пожелать здоровья, это все-таки самое главное. Но и про счастье тоже нельзя забывать!", "Извини, что я не такой романтичный, хотел показать свою любовь как-то особенно...", "И ничего лучше..", "Хотя лучше просто скажу тебе:", "Спасибо, что ты существуешь в моей жизни", "Я тебя правда очень сильно люблю, поздравляю с днем рождения!", "Хочется сейчас быть рядом и крепко-крепко тебя обнять, но увы...", "Поэтому хочу тебя обнять хотя бы виртуально 🫂🫂🫂🫂", "Ты у меня самая самая!"];
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
                setTimeout(typeEffect, 100);
            } else {
                setTimeout(() => {
                    deleting = true;
                    typeEffect();
                }, 2000);
            }
        } else {
            if (index > 0) {
                paragraph.textContent = currentText.substring(0, index - 1);
                textContainer.style.width = `${paragraph.offsetWidth - 20}px`;
                index--;
                setTimeout(typeEffect, 50);
            } else {
                deleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(typeEffect, 1000);
            }
        }
        
    }
    setTimeout(typeEffect, 2000);
});
