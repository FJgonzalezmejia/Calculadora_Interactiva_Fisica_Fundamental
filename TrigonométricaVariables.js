document.addEventListener("DOMContentLoaded", () => {
    updateForm();
});

function updateForm() {
    const findVariable = document.getElementById('findVariable').value;
    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = '';

    switch (findVariable) {
        case 'adjacent':
            inputFields.innerHTML = `
                <div class="form-group mb-3">
                    <label for="hypotenuse">Hipotenusa (c):</label>
                    <input type="number" id="hypotenuse" class="form-control" step="any" required>
                </div>
                <div class="form-group mb-3">
                    <label for="angle">Ángulo (θ):</label>
                    <input type="number" id="angle" class="form-control" step="any" required>
                </div>`;
            break;
        case 'opposite':
            inputFields.innerHTML = `
                <div class="form-group mb-3">
                    <label for="hypotenuse">Hipotenusa (c):</label>
                    <input type="number" id="hypotenuse" class="form-control" step="any" required>
                </div>
                <div class="form-group mb-3">
                    <label for="angle">Ángulo (θ):</label>
                    <input type="number" id="angle" class="form-control" step="any" required>
                </div>`;
            break;
        case 'hypotenuse':
            inputFields.innerHTML = `
                <div class="form-group mb-3">
                    <label for="opposite">Opuesto (a):</label>
                    <input type="number" id="opposite" class="form-control" step="any" required>
                </div>
                <div class="form-group mb-3">
                    <label for="angle">Ángulo (θ):</label>
                    <input type="number" id="angle" class="form-control" step="any" required>
                </div>`;
            break;
        case 'angle':
            inputFields.innerHTML = `
                <div class="form-group mb-3">
                    <label for="opposite">Opuesto (a):</label>
                    <input type="number" id="opposite" class="form-control" step="any" required>
                </div>
                <div class="form-group mb-3">
                    <label for="adjacent">Adyacente (b):</label>
                    <input type="number" id="adjacent" class="form-control" step="any" required>
                </div>`;
            break;
        default:
            break;
    }
}

function calculate(event) {
    event.preventDefault();

    const findVariable = document.getElementById('findVariable').value;
    const result = document.getElementById('result');
    let calculation;

    switch (findVariable) {
        case 'adjacent':
            const hypotenuse1 = parseFloat(document.getElementById('hypotenuse').value);
            const angle1 = parseFloat(document.getElementById('angle').value);
            calculation = `Adyacente (b) = ${(hypotenuse1 * Math.cos(angle1 * Math.PI / 180)).toFixed(2)}`;
            break;
        case 'opposite':
            const hypotenuse2 = parseFloat(document.getElementById('hypotenuse').value);
            const angle2 = parseFloat(document.getElementById('angle').value);
            calculation = `Opuesto (a) = ${(hypotenuse2 * Math.sin(angle2 * Math.PI / 180)).toFixed(2)}`;
            break;
        case 'hypotenuse':
            const opposite = parseFloat(document.getElementById('opposite').value);
            const angle3 = parseFloat(document.getElementById('angle').value);
            calculation = `Hipotenusa (c) = ${(opposite / Math.sin(angle3 * Math.PI / 180)).toFixed(2)}`;
            break;
        case 'angle':
            const opposite1 = parseFloat(document.getElementById('opposite').value);
            const adjacent1 = parseFloat(document.getElementById('adjacent').value);
            calculation = `Ángulo (θ) = ${(Math.atan(opposite1 / adjacent1) * (180 / Math.PI)).toFixed(2)}°`;
            break;
        default:
            calculation = 'Por favor, selecciona una variable a buscar.';
            break;
    }

    result.innerHTML = `<strong>${calculation}</strong>`;
}
