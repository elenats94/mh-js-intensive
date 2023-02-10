const skill = document.getElementById('skill');
const isLove = document.getElementById('is_love');

const skillText = prompt('Какой язык вы учите?', 'пока не в курсе');
const isLoveValue = confirm('Вы любите изучаемый язык?');

skill.innerText = skillText;
if (isLoveValue) {
    isLove.innerText = 'да';
} else {
    isLove.innerText = 'нет';
}
