let userName = prompt('Введите ваше имя:');
alert(`Привет, ${userName}!`);

document.getElementById("greetButton").onclick = function()
    {
    let inputName = document.getElementById("userInput").value;
    document.getElementById("greeting").innerText = `Привет, ${inputName}!`;
    };
