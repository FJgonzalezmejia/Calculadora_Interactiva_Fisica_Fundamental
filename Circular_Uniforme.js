function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');
    
    let html = '';

    switch (calculationType) {
        case 'radius':
            html = `
                <div class="form-group">
                    <label for="velocity">Velocidad (v):</label>
                    <input type="number" id="velocity" step="any" required>
                </div>
                <div class="form-group">
                    <label for="angularVelocity">Velocidad Angular (ω):</label>
                    <input type="number" id="angularVelocity" step="any" required>
                </div>
            `;
            break;
        case 'velocity':
            html = `
                <div class="form-group">
                    <label for="radius">Radio (r):</label>
                    <input type="number" id="radius" step="any" required>
                </div>
                <div class="form-group">
                    <label for="angularVelocity">Velocidad Angular (ω):</label>
                    <input type="number" id="angularVelocity" step="any" required>
                </div>
            `;
            break;
        case 'angularVelocity':
            html = `
                <div class="form-group">
                    <label for="velocity">Velocidad (v):</label>
                    <input type="number" id="velocity" step="any" required>
                </div>
                <div class="form-group">
                    <label for="radius">Radio (r):</label>
                    <input type="number" id="radius" step="any" required>
                </div>
            `;
            break;
        case 'centripetalForce':
            html = `
                <div class="form-group">
                    <label for="velocity">Velocidad (v):</label>
                    <input type="number" id="velocity" step="any" required>
                </div>
                <div class="form-group">
                    <label for="radius">Radio (r):</label>
                    <input type="number" id="radius" step="any" required>
                </div>
                <div class="form-group">
                    <label for="mass">Masa (m):</label>
                    <input type="number" id="mass" step="any" required>
                </div>
            `;
            break;
    }

    inputFields.innerHTML = html;
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    
    const radius = parseFloat(document.getElementById('radius')?.value || 0);
    const velocity = parseFloat(document.getElementById('velocity')?.value || 0);
    const angularVelocity = parseFloat(document.getElementById('angularVelocity')?.value || 0);
    const mass = parseFloat(document.getElementById('mass')?.value || 0);

    if (calculationType === 'radius') {
        if (isNaN(velocity) || isNaN(angularVelocity)) {
            alert('Por favor, ingrese todos los valores correctamente.');
            return;
        }
        const calculatedRadius = velocity / angularVelocity;
        document.getElementById('resultValue').innerText = `Radio (r): ${calculatedRadius.toFixed(2)} m`;
    } else if (calculationType === 'velocity') {
        if (isNaN(radius) || isNaN(angularVelocity)) {
            alert('Por favor, ingrese todos los valores correctamente.');
            return;
        }
        const calculatedVelocity = angularVelocity * radius;
        document.getElementById('resultValue').innerText = `Velocidad (v): ${calculatedVelocity.toFixed(2)} m/s`;
    } else if (calculationType === 'angularVelocity') {
        if (isNaN(velocity) || isNaN(radius)) {
            alert('Por favor, ingrese todos los valores correctamente.');
            return;
        }
        const calculatedAngularVelocity = velocity / radius;
        document.getElementById('resultValue').innerText = `Velocidad Angular (ω): ${calculatedAngularVelocity.toFixed(2)} rad/s`;
    } else if (calculationType === 'centripetalForce') {
        if (isNaN(velocity) || isNaN(radius) || isNaN(mass)) {
            alert('Por favor, ingrese todos los valores correctamente.');
            return;
        }
        const centripetalForce = (mass * Math.pow(velocity, 2)) / radius;
        document.getElementById('resultValue').innerText = `Fuerza Centrípeta (Fc): ${centripetalForce.toFixed(2)} N`;
    }
}

