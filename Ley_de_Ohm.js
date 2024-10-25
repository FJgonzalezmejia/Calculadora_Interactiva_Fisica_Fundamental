function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');
    
    let fields = '';
    
    if (calculationType === 'voltage') {
        fields = `
            <div class="form-group">
                <label for="current">Corriente (A):</label>
                <input type="number" id="current" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="resistance">Resistencia (Ω):</label>
                <input type="number" id="resistance" step="any" class="form-control">
            </div>
        `;
    } else if (calculationType === 'current') {
        fields = `
            <div class="form-group">
                <label for="voltage">Voltaje (V):</label>
                <input type="number" id="voltage" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="resistance">Resistencia (Ω):</label>
                <input type="number" id="resistance" step="any" class="form-control">
            </div>
        `;
    } else if (calculationType === 'resistance') {
        fields = `
            <div class="form-group">
                <label for="voltage">Voltaje (V):</label>
                <input type="number" id="voltage" step="any" class="form-control">
            </div>
            <div class="form-group">
                <label for="current">Corriente (A):</label>
                <input type="number" id="current" step="any" class="form-control">
            </div>
        `;
    }
    
    inputFields.innerHTML = fields;
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    let result;
    
    if (calculationType === 'voltage') {
        const current = parseFloat(document.getElementById('current').value);
        const resistance = parseFloat(document.getElementById('resistance').value);
        result = current * resistance;
    } else if (calculationType === 'current') {
        const voltage = parseFloat(document.getElementById('voltage').value);
        const resistance = parseFloat(document.getElementById('resistance').value);
        result = voltage / resistance;
    } else if (calculationType === 'resistance') {
        const voltage = parseFloat(document.getElementById('voltage').value);
        const current = parseFloat(document.getElementById('current').value);
        result = voltage / current;
    }
    
    document.getElementById('resultValue').innerText = `Resultado: ${result.toFixed(2)}`;
}

// Inicializar formulario con los campos correctos
updateForm();
