const num1 = document.querySelector("#Num1");
const num2 = document.querySelector("#Num2");
const res = document.querySelector("#Res");

const buttons = document.querySelectorAll("#calculator > button");

const output = document.querySelector("#history");

//const output = document.querySelector("calcLog");

// buttons.forEach(button => {

//     button.addEventListener("click", (event) => {
//         alert(event.target.innerText);
//     })
// });

const calculate = (e) => {
    const operator = e.target.innerText;

    switch (operator) {
        case 'c':
            num1.value = 0;
            num2.value = 0;
            res.value = 0;
            return;
        case '+':
            res.value = Number.parseInt(num1.value) + Number.parseInt(num2.value);
            break;
        case '-':
            res.value = Number.parseInt(num1.value) - Number.parseInt(num2.value);
            break;
        case 'x':
            res.value = Number.parseInt(num1.value) * Number.parseInt(num2.value);
            break;
        case '/':
            res.value = Number.parseFloat(num1.value) / Number.parseFloat(num2.value);
            break;
        case 'Pow':
            res.value = Number.parseInt(num1.value) ** Number.parseInt(num2.value);
            break;
    }
    writeHistory(num1.value, operator, num2.value, res.value);
}

const writeHistory = (num1, op, num2, result) => {
    const newHistory = document.createElement('p');
    newHistory.textContent = `${num1} ${op} ${num2} = ${result}`;

    output.appendChild(newHistory);
}

//calcLog.innerHTML = calcLog.innerHTML + "<br>" + num1 + operator + num2 + "=" + result;
buttons.forEach(button => button.addEventListener('click', calculate));

    // const add = () => {

    //     res.value = Number.parseInt(num1.value) + Number.parseInt(num2.value);
    // }
    // const subtract = () => {
    //     res.value = Number.parseInt(num1.value) - Number.parseInt(num2.value);
    // }

    // const multiply = () => {
    //     res.value = Number.parseInt(num1.value) * Number.parseInt(num2.value);
    // }
    // const divide = () => {
    //     res.value = Number.parseFloat(num1.value) / Number.parseFloat(num2.value);
    // }

    // const cancel = () => {
    //     num1.value = 0;
    //     num2.value = 0;
    //     res.value = 0;
    // }

    // const power = () => {
    //     res.value = Number.parseInt(num1.value) ** Number.parseInt(num2.value);
    // }

