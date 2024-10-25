function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');

    let fields = '';

    if (calculationType === 'position') {
        fields = `
            <div class="form-group">
                <label for="initialPosition">Posición Inicial (s₀):</label>
                <input type="number" id="initialPosition" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="initialVelocity">Velocidad Inicial (v₀):</label>
                <input type="number" id="initialVelocity" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="acceleration">Aceleración (a):</label>
                <input type="number" id="acceleration" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="time">Tiempo (t):</label>
                <input type="number" id="time" step="any" class="form-control">
            </div>
        `;
    } else if (calculationType === 'velocity') {
        fields = `
            <div class="form-group">
                <label for="initialVelocity">Velocidad Inicial (v₀):</label>
                <input type="number" id="initialVelocity" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="acceleration">Aceleración (a):</label>
                <input type="number" id="acceleration" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="time">Tiempo (t):</label>
                <input type="number" id="time" step="any" class="form-control">
            </div>
        `;
    } else if (calculationType === 'acceleration') {
        fields = `
            <div class="form-group">
                <label for="initialVelocity">Velocidad Inicial (v₀):</label>
                <input type="number" id="initialVelocity" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="finalVelocity">Velocidad Final (v):</label>
                <input type="number" id="finalVelocity" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="time">Tiempo (t):</label>
                <input type="number" id="time" step="any" class="form-control">
            </div>
        `;
    } else if (calculationType === 'time') {
        fields = `
            <div class="form-group">
                <label for="initialVelocity">Velocidad Inicial (v₀):</label>
                <input type="number" id="initialVelocity" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="finalVelocity">Velocidad Final (v):</label>
                <input type="number" id="finalVelocity" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="acceleration">Aceleración (a):</label>
                <input type="number" id="acceleration" step="any" class="form-control">
            </div>
        `;
    }

    inputFields.innerHTML = fields;
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;

    let result;
    if (calculationType === 'position') {
        const initialPosition = parseFloat(document.getElementById('initialPosition').value);
        const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
        const acceleration = parseFloat(document.getElementById('acceleration').value);
        const time = parseFloat(document.getElementById('time').value);

        if (isNaN(initialPosition) || isNaN(initialVelocity) || isNaN(acceleration) || isNaN(time)) {
            alert('Por favor, ingrese todos los valores correctamente.');
            return;
        }

        result = initialPosition + initialVelocity * time + 0.5 * acceleration * time ** 2;
        document.getElementById('resultValue').innerText = `Posición Final (s): ${result.toFixed(2)} m`;
    } else if (calculationType === 'velocity') {
        const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
        const acceleration = parseFloat(document.getElementById('acceleration').value);
        const time = parseFloat(document.getElementById('time').value);

        if (isNaN(initialVelocity) || isNaN(acceleration) || isNaN(time)) {
            alert('Por favor, ingrese todos los valores correctamente.');
            return;
        }

        result = initialVelocity + acceleration * time;
        document.getElementById('resultValue').innerText = `Velocidad Final (v): ${result.toFixed(2)} m/s`;
    } else if (calculationType === 'acceleration') {
        const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
        const finalVelocity = parseFloat(document.getElementById('finalVelocity').value);
        const time = parseFloat(document.getElementById('time').value);

        if (isNaN(initialVelocity) || isNaN(finalVelocity) || isNaN(time)) {
            alert('Por favor, ingrese todos los valores correctamente.');
            return;
        }

        result = (finalVelocity - initialVelocity) / time;
        document.getElementById('resultValue').innerText = `Aceleración (a): ${result.toFixed(2)} m/s²`;
    } else if (calculationType === 'time') {
        const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
        const finalVelocity = parseFloat(document.getElementById('finalVelocity').value);
        const acceleration = parseFloat(document.getElementById('acceleration').value);

        if (isNaN(initialVelocity) || isNaN(finalVelocity) || isNaN(acceleration)) {
            alert('Por favor, ingrese todos los valores correctamente.');
            return;
        }

        result = (finalVelocity - initialVelocity) / acceleration;
        document.getElementById('resultValue').innerText = `Tiempo (t): ${result.toFixed(2)} s`;
    }
}

// Inicializamos el formulario con los campos por defecto
updateForm();
