import { QUESTION } from './api.js';

const urlParams = new URL(location.href).searchParams;
const index = urlParams.get('index');

const endCount = 10;
const newIndex = index - 1;

const questionElement = document.getElementById("question");
const hintElement = document.getElementById("hint");
const genreElement = document.getElementById("genre");

const countElement = document.getElementById("count");
const endCountElement = document.getElementById("endCount");

const inputElement = document.getElementById("resultText");
inputElement.focus();

const hintBtn = document.getElementById("hintBtn");
const resultBtn = document.getElementById("resultBtn");

document.title = QUESTION[newIndex].question;

// 현재 스테이지 입력
countElement.innerText = index;

// 총 스테이지 입력
endCountElement.innerText = `/ ${endCount}`;

// 질문 텍스트 입력
questionElement.innerText = QUESTION[newIndex].question;

// 힌트 텍스트 입력
hintElement.innerText = QUESTION[newIndex].hint;

// 장르 텍스트 입력
genreElement.innerText = `장르: ${QUESTION[newIndex].genre}`;

// 제출 버튼을 클릭하거나 Enter 버튼 입력 시 이벤트
const handleResultCheck = () => {
    const inputText = inputElement?.value;
    const answer = QUESTION[newIndex]?.answer;

    if (inputText.length <= 0) {
        alert("정답을 입력해주세요!");
        inputElement.focus();
        return;
    } else if (inputText === answer) {
        const locationIndex = Number(index);
        const resultLink = 'result.html?index=' + locationIndex + "&result=" + answer;

        location.href = resultLink;
    } else {
        alert("오답입니다");
        inputElement.value = "";
        inputElement.focus();
    }
}

// 힌트 보기 버튼 클릭 시 이벤트
hintBtn.addEventListener('click', () => {
    hintBtn.style.display = "none";
    hint.style.display = "block";
});

// input tag 에서 Enter 버튼 입력 시 이벤트
inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleResultCheck();
    }
});

// 제출 버튼 클릭 시 이벤트
resultBtn.addEventListener('click', (event) => {
    handleResultCheck();
});