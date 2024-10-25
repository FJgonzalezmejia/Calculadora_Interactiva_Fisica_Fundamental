function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = '';

    if (calculationType === 'side') {
        inputFields.innerHTML = `
            <div class="form-group">
                <label for="angleA">Ángulo A (en grados):</label>
                <input type="number" id="angleA" class="form-control">
            </div>
            <div class="form-group">
                <label for="sideA">Lado a:</label>
                <input type="number" id="sideA" class="form-control">
            </div>
            <div class="form-group">
                <label for="angleB">Ángulo B (en grados):</label>
                <input type="number" id="angleB" class="form-control">
            </div>
            <div class="form-group">
                <label for="sideB">Lado b:</label>
                <input type="number" id="sideB" class="form-control">
            </div>
        `;
    } else if (calculationType === 'angle') {
        inputFields.innerHTML = `
            <div class="form-group">
                <label for="sideA">Lado a:</label>
                <input type="number" id="sideA" class="form-control">
            </div>
            <div class="form-group">
                <label for="angleA">Ángulo A (en grados):</label>
                <input type="number" id="angleA" class="form-control">
            </div>
            <div class="form-group">
                <label for="sideB">Lado b:</label>
                <input type="number" id="sideB" class="form-control">
            </div>
            <div class="form-group">
                <label for="angleB">Ángulo B (en grados):</label>
                <input type="number" id="angleB" class="form-control">
            </div>
        `;
    }
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    let result = 0;

    if (calculationType === 'side') {
        const angleA = parseFloat(document.getElementById('angleA').value);
        const sideA = parseFloat(document.getElementById('sideA').value);
        const angleB = parseFloat(document.getElementById('angleB').value);
        const sideB = parseFloat(document.getElementById('sideB').value);

        const angleARad = (angleA * Math.PI) / 180;
        const angleBRad = (angleB * Math.PI) / 180;

        result = (sideA / Math.sin(angleARad)) * Math.sin(angleBRad);
    } else if (calculationType === 'angle') {
        const sideA = parseFloat(document.getElementById('sideA').value);
        const angleA = parseFloat(document.getElementById('angleA').value);
        const sideB = parseFloat(document.getElementById('sideB').value);

        const angleARad = (angleA * Math.PI) / 180;

        const sinB = (sideB * Math.sin(angleARad)) / sideA;
        result = (Math.asin(sinB) * 180) / Math.PI;
    }

    document.getElementById('resultValue').innerText = result.toFixed(2);
}
