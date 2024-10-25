// Principio_de_Pascal.js

function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');

    let fieldsHtml = '';
    if (calculationType === 'force') {
        fieldsHtml = `
            <div class="form-group mt-3">
                <label for="pressure">Presión (P) en Pascales</label>
                <input type="number" id="pressure" class="form-control" placeholder="Ingrese la presión">
            </div>
            <div class="form-group mt-3">
                <label for="area">Área (A) en metros cuadrados</label>
                <input type="number" id="area" class="form-control" placeholder="Ingrese el área">
            </div>
        `;
    } else if (calculationType === 'pressure') {
        fieldsHtml = `
            <div class="form-group mt-3">
                <label for="force">Fuerza (F) en Newtons</label>
                <input type="number" id="force" class="form-control" placeholder="Ingrese la fuerza">
            </div>
            <div class="form-group mt-3">
                <label for="area">Área (A) en metros cuadrados</label>
                <input type="number" id="area" class="form-control" placeholder="Ingrese el área">
            </div>
        `;
    } else if (calculationType === 'area') {
        fieldsHtml = `
            <div class="form-group mt-3">
                <label for="force">Fuerza (F) en Newtons</label>
                <input type="number" id="force" class="form-control" placeholder="Ingrese la fuerza">
            </div>
            <div class="form-group mt-3">
                <label for="pressure">Presión (P) en Pascales</label>
                <input type="number" id="pressure" class="form-control" placeholder="Ingrese la presión">
            </div>
        `;
    }

    inputFields.innerHTML = fieldsHtml;
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    const resultValue = document.getElementById('resultValue');

    let result = 0;

    if (calculationType === 'force') {
        const pressure = parseFloat(document.getElementById('pressure').value);
        const area = parseFloat(document.getElementById('area').value);
        result = pressure * area;
        resultValue.innerText = `Fuerza (F) = ${result.toFixed(2)} N`;
    } else if (calculationType === 'pressure') {
        const force = parseFloat(document.getElementById('force').value);
        const area = parseFloat(document.getElementById('area').value);
        result = force / area;
        resultValue.innerText = `Presión (P) = ${result.toFixed(2)} Pa`;
    } else if (calculationType === 'area') {
        const force = parseFloat(document.getElementById('force').value);
        const pressure = parseFloat(document.getElementById('pressure').value);
        result = force / pressure;
        resultValue.innerText = `Área (A) = ${result.toFixed(2)} m²`;
    }
}

// Inicializar el formulario con los campos correctos al cargar la página
document.addEventListener('DOMContentLoaded', updateForm);
