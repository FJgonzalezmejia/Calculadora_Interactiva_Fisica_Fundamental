function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');
    
    let fields = '';
    
    if (calculationType === 'force') {
        fields = `
            <div class="form-group">
                <label for="mass">Masa (m):</label>
                <input type="number" id="mass" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="acceleration">Aceleración (a):</label>
                <input type="number" id="acceleration" step="any" class="form-control">
            </div>`;
    } else if (calculationType === 'mass') {
        fields = `
            <div class="form-group">
                <label for="force">Fuerza (F):</label>
                <input type="number" id="force" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="acceleration">Aceleración (a):</label>
                <input type="number" id="acceleration" step="any" class="form-control">
            </div>`;
    } else if (calculationType === 'acceleration') {
        fields = `
            <div class="form-group">
                <label for="force">Fuerza (F):</label>
                <input type="number" id="force" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="mass">Masa (m):</label>
                <input type="number" id="mass" step="any" class="form-control">
            </div>`;
    } else if (calculationType === 'gravitationalForce') {
        fields = `
            <div class="form-group">
                <label for="mass1">Masa 1 (m₁):</label>
                <input type="number" id="mass1" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="mass2">Masa 2 (m₂):</label>
                <input type="number" id="mass2" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="distance">Distancia (r):</label>
                <input type="number" id="distance" step="any" class="form-control">
            </div>`;
    }
    
    inputFields.innerHTML = fields;
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    let result;
    
    if (calculationType === 'force') {
        const mass = parseFloat(document.getElementById('mass').value);
        const acceleration = parseFloat(document.getElementById('acceleration').value);
        result = mass * acceleration;
    } else if (calculationType === 'mass') {
        const force = parseFloat(document.getElementById('force').value);
        const acceleration = parseFloat(document.getElementById('acceleration').value);
        result = force / acceleration;
    } else if (calculationType === 'acceleration') {
        const force = parseFloat(document.getElementById('force').value);
        const mass = parseFloat(document.getElementById('mass').value);
        result = force / mass;
    } else if (calculationType === 'gravitationalForce') {
        const mass1 = parseFloat(document.getElementById('mass1').value);
        const mass2 = parseFloat(document.getElementById('mass2').value);
        const distance = parseFloat(document.getElementById('distance').value);
        const G = 6.67430e-11; // Constante de gravitación universal en m^3 kg^-1 s^-2
        result = (G * mass1 * mass2) / (distance * distance);
    }
    
    document.getElementById('resultValue').innerText = `Resultado: ${result.toExponential(2)} N`;
}

// Inicializar formulario con los campos correctos
updateForm();
