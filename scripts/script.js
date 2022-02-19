let skewElement = window.getComputedStyle(wholeBody, '::before');

const lightModeHandler = () => {
    wholeBody.classList.add('light-mode');
}

themeBtn.addEventListener("click" , lightModeHandler);