function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');
    
    let fields = '';
    
    if (calculationType === 'y') {
        fields = `
            <div class="form-group">
                <label for="initialHeight">Altura inicial (H):</label>
                <input type="number" id="initialHeight" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="gravity">Aceleración de la gravedad (g):</label>
                <input type="number" id="gravity" step="any" value="9.81" class="form-control">
            </div>
            <div class="form-group">
                <label for="time">Tiempo (t):</label>
                <input type="number" id="time" step="any" class="form-control">
            </div>
        `;
    } else if (calculationType === 'd') {
        fields = `
            <div class="form-group">
                <label for="gravity">Aceleración de la gravedad (g):</label>
                <input type="number" id="gravity" step="any" value="9.81" class="form-control">
            </div>
            <div class="form-group">
                <label for="time">Tiempo (t):</label>
                <input type="number" id="time" step="any" class="form-control">
            </div>
        `;
    } else if (calculationType === 'h') {
        fields = `
            <div class="form-group">
                <label for="gravity">Aceleración de la gravedad (g):</label>
                <input type="number" id="gravity" step="any" value="9.81" class="form-control">
            </div>
            <div class="form-group">
                <label for="velocity">Velocidad (v):</label>
                <input type="number" id="velocity" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="time">Tiempo (t):</label>
                <input type="number" id="time" step="any" class="form-control">
            </div>
        `;
    } else if (calculationType === 'v') {
        fields = `
            <div class="form-group">
                <label for="initialHeight">Altura inicial (H):</label>
                <input type="number" id="initialHeight" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="gravity">Aceleración de la gravedad (g):</label>
                <input type="number" id="gravity" step="any" value="9.81" class="form-control">
            </div>
            <div class="form-group">
                <label for="time">Tiempo (t):</label>
                <input type="number" id="time" step="any" class="form-control">
            </div>
        `;
    }
    
    inputFields.innerHTML = fields;
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    let result;
    
    if (calculationType === 'y') {
        const initialHeight = parseFloat(document.getElementById('initialHeight').value);
        const gravity = parseFloat(document.getElementById('gravity').value);
        const time = parseFloat(document.getElementById('time').value);
        result = initialHeight - 0.5 * gravity * Math.pow(time, 2);
    } else if (calculationType === 'd') {
        const gravity = parseFloat(document.getElementById('gravity').value);
        const time = parseFloat(document.getElementById('time').value);
        result = 0.5 * gravity * Math.pow(time, 2);
    } else if (calculationType === 'h') {
        const gravity = parseFloat(document.getElementById('gravity').value);
        const velocity = parseFloat(document.getElementById('velocity').value);
        const time = parseFloat(document.getElementById('time').value);
        result = velocity * time - 0.5 * gravity * Math.pow(time, 2);
    } else if (calculationType === 'v') {
        const initialHeight = parseFloat(document.getElementById('initialHeight').value);
        const gravity = parseFloat(document.getElementById('gravity').value);
        const time = parseFloat(document.getElementById('time').value);
        result = gravity * time;
    }
    
    document.getElementById('resultValue').innerText = `Resultado: ${result.toFixed(2)}`;
}

// Inicializar formulario con los campos correctos
updateForm();
