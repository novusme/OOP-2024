document.getElementById('calculateButton').addEventListener('click', function()

    {
    let edgeLength = parseFloat(document.getElementById('edgeLength').value);
    if (edgeLength <= 0) {
        document.getElementById('result').textContent = "Введите положительное число.";
        return;
    }
    
    let volume = (5 * (3 + Math.sqrt(5)) / 12) * Math.pow(edgeLength, 3);
    document.getElementById('result').textContent = `Объем икосаэдра: ${volume.toFixed(2)}`;
});
