function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');

    let fieldsHTML = '';
    switch (calculationType) {
        case 'buoyantForce':
            fieldsHTML = `
                <div class="form-group">
                    <label for="fluidDensity">Densidad del Fluido (kg/m³):</label>
                    <input type="number" id="fluidDensity" class="form-control" step="any">
                </div>
                <div class="form-group">
                    <label for="objectVolume">Volumen del Objeto (m³):</label>
                    <input type="number" id="objectVolume" class="form-control" step="any">
                </div>`;
            break;
        case 'fluidDensity':
            fieldsHTML = `
                <div class="form-group">
                    <label for="buoyantForce">Fuerza de Empuje (N):</label>
                    <input type="number" id="buoyantForce" class="form-control" step="any">
                </div>
                <div class="form-group">
                    <label for="objectVolume">Volumen del Objeto (m³):</label>
                    <input type="number" id="objectVolume" class="form-control" step="any">
                </div>`;
            break;
        case 'objectVolume':
            fieldsHTML = `
                <div class="form-group">
                    <label for="buoyantForce">Fuerza de Empuje (N):</label>
                    <input type="number" id="buoyantForce" class="form-control" step="any">
                </div>
                <div class="form-group">
                    <label for="fluidDensity">Densidad del Fluido (kg/m³):</label>
                    <input type="number" id="fluidDensity" class="form-control" step="any">
                </div>`;
            break;
    }

    inputFields.innerHTML = fieldsHTML;
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    let resultValue = '';

    const g = 9.81; // Aceleración debida a la gravedad (m/s²)

    switch (calculationType) {
        case 'buoyantForce':
            const fluidDensityForBuoyantForce = parseFloat(document.getElementById('fluidDensity').value);
            const objectVolumeForBuoyantForce = parseFloat(document.getElementById('objectVolume').value);
            if (!isNaN(fluidDensityForBuoyantForce) && !isNaN(objectVolumeForBuoyantForce)) {
                const buoyantForce = fluidDensityForBuoyantForce * objectVolumeForBuoyantForce * g;
                resultValue = `Fuerza de Empuje: ${buoyantForce.toFixed(2)} N`;
            } else {
                resultValue = 'Por favor, ingrese valores válidos.';
            }
            break;
        case 'fluidDensity':
            const buoyantForceForFluidDensity = parseFloat(document.getElementById('buoyantForce').value);
            const objectVolumeForFluidDensity = parseFloat(document.getElementById('objectVolume').value);
            if (!isNaN(buoyantForceForFluidDensity) && !isNaN(objectVolumeForFluidDensity) && objectVolumeForFluidDensity !== 0) {
                const fluidDensity = buoyantForceForFluidDensity / (objectVolumeForFluidDensity * g);
                resultValue = `Densidad del Fluido: ${fluidDensity.toFixed(2)} kg/m³`;
            } else {
                resultValue = 'Por favor, ingrese valores válidos.';
            }
            break;
        case 'objectVolume':
            const buoyantForceForObjectVolume = parseFloat(document.getElementById('buoyantForce').value);
            const fluidDensityForObjectVolume = parseFloat(document.getElementById('fluidDensity').value);
            if (!isNaN(buoyantForceForObjectVolume) && !isNaN(fluidDensityForObjectVolume) && fluidDensityForObjectVolume !== 0) {
                const objectVolume = buoyantForceForObjectVolume / (fluidDensityForObjectVolume * g);
                resultValue = `Volumen del Objeto: ${objectVolume.toFixed(2)} m³`;
            } else {
                resultValue = 'Por favor, ingrese valores válidos.';
            }
            break;
    }

    document.getElementById('resultValue').textContent = resultValue;
}

// Inicializar el formulario
updateForm();
