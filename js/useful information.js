const question = document.getElementsByClassName("question");
const questionTitle = document.getElementsByClassName("question__title");

for (i = 0; i < questionTitle.length; i++) {
    questionTitle[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < question.length; i++) {
        question[i].className = 'question not-active';
    }
    if (itemClass == 'question not-active') {
        this.parentNode.className = 'question active';
    }
}
