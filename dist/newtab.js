"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('dataInput');
    const buttonElement = document.getElementById('getDataButton');
    const displayElement = document.getElementById('displayText');
    buttonElement.addEventListener('click', () => {
        const inputData = inputElement.value;
        displayElement.textContent = `You entered: ${inputData}`;
    });
});
