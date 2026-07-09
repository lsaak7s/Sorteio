/*Aqui esta os valores que foram pegos */
const min = document.getElementById('Min');
const max = document.getElementById('Max');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
/*Aqui esta retirando as casas decimais e fazendo com que ele pegue o primeiro valor e o ultimo */
function generateRandomNumber(minVal, maxVal) { return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal; }

submitBtn.addEventListener('click', function () {
    /*aqui esta tranformando os valores em numeros */
    const minVal = parseInt(min.value);
    const maxVal = parseInt(max.value);
    /*aqui esta chamando a função e passando os valores para ela, e retornando o número sorteado */
    const randomNumber = generateRandomNumber(minVal, maxVal);
    /*aqui esta exibindo o número sorteado no elemento result la no html */
    result.textContent = randomNumber;
});