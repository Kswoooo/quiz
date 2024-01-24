const urlParams = new URL(location.href).searchParams;
const result = urlParams.get('result');
const index = urlParams.get('index');
const newIndex = Number(index) + 1;

const resultElement = document.getElementById('result');
const title = document.getElementById('title');
const nextBtn = document.getElementById('nextBtn');

document.title = result;

resultElement.innerText = result;

if(Number(index) === 10) {
    title.innerText = "모든 문제를 풀었어요! 축하합니다!!";
    nextBtn.innerText = "다시 하기";
}

nextBtn.addEventListener('click', () => {

    if(Number(index) === 10) {
        const nextLink = 'index.html';
        location.href = nextLink;
    }else {
        const nextLink = 'stage.html?index='+ newIndex;
        location.href = nextLink;
    }
    
});