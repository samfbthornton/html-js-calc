const num1 = document.querySelector("#Num1");
const num2 = document.querySelector("#Num2");
const res = document.querySelector("#Res");

const add = () => {
    console.log(res);
    res.value = Number.parseInt(num1.value) + Number.parseInt(num2.value);
}
const subtract = () => {
    res.value = Number.parseInt(num1.value) - Number.parseInt(num2.value);
}

const multiply = () => {
    res.value = Number.parseInt(num1.value) * Number.parseInt(num2.value);
}
const divide = () => {
    res.value = Number.parseFloat(num1.value) / Number.parseFloat(num2.value);
}

const cancel = () => {
    res.value = 0;
}