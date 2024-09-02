document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('dataInput') as HTMLInputElement;
    const buttonElement = document.getElementById('getDataButton') as HTMLButtonElement;
    const displayElement = document.getElementById('displayText') as HTMLParagraphElement;
  
    buttonElement.addEventListener('click', () => {
      const inputData = inputElement.value;
      displayElement.textContent = `You entered: ${inputData}`;
    });
  });
  