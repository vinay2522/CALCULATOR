let history = [];

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    history.push(`${display.value} = ${result}`);
    display.value = result;
    updateHistory();
}
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Handle percentage calculations
        let result = eval(display.value.replace(/%/g, '*0.01'));
        history.push(`${display.value} = ${result}`);
        display.value = result;
        updateHistory();
    } catch (error) {
        display.value = "Error";
    }
}


function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

document.getElementById('toggle-theme').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});
