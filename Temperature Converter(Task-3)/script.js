const temperatureInput = document.getElementById('temperatureInput');
const unitSelector = document.getElementById('unitSelector');
const convertButton = document.getElementById('convertButton');
const resultArea = document.getElementById('resultArea');

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelector.value;

    if (!isNaN(temperature)) {
        if (unit === 'celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            resultArea.textContent = `Result: ${temperature}°C  =  ${fahrenheit.toFixed(2)}°F`;
        } else {
            const celsius = (temperature - 32) * 5/9;
            resultArea.textContent = `Result: ${temperature}°F  =  ${celsius.toFixed(2)}°C`;
        }
    } else {
        resultArea.textContent = 'Please enter a valid number.';
    }
}

convertButton.addEventListener('click', convertTemperature);
