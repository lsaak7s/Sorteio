const min = document.getElementById('Min');
const max = document.getElementById('Max');
const submitBtn = document.getElementById('submit-btn');

function generateRandomNumber(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }


submitBtn.addEventListener('click', function() {
    const minVal = parseInt(min.value);
    const maxVal = parseInt(max.value);
    const randomNumber = generateRandomNumber(minVal, maxVal);
    alert(randomNumber);
});