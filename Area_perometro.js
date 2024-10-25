document.getElementById('shape').addEventListener('change', function() {
    const shape = this.value;
    const inputs = document.getElementById('inputs');
    inputs.innerHTML = '';
    
    switch (shape) {
        case 'triangle':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="base">Base (m):</label>
                    <input type="number" id="base" required>
                </div>
                <div class="form-group">
                    <label for="height">Altura (m):</label>
                    <input type="number" id="height" required>
                </div>
                <div class="form-group">
                    <label for="sideA">Lado A (m):</label>
                    <input type="number" id="sideA" required>
                </div>
                <div class="form-group">
                    <label for="sideB">Lado B (m):</label>
                    <input type="number" id="sideB" required>
                </div>
                <div class="form-group">
                    <label for="sideC">Lado C (m):</label>
                    <input type="number" id="sideC" required>
                </div>
            `;
            break;
        case 'rectangle':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="length">Longitud (m):</label>
                    <input type="number" id="length" required>
                </div>
                <div class="form-group">
                    <label for="width">Ancho (m):</label>
                    <input type="number" id="width" required>
                </div>
            `;
            break;
        case 'square':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="side">Lado (m):</label>
                    <input type="number" id="side" required>
                </div>
            `;
            break;
        case 'trapezoid':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="base1">Base 1 (m):</label>
                    <input type="number" id="base1" required>
                </div>
                <div class="form-group">
                    <label for="base2">Base 2 (m):</label>
                    <input type="number" id="base2" required>
                </div>
                <div class="form-group">
                    <label for="height">Altura (m):</label>
                    <input type="number" id="height" required>
                </div>
                <div class="form-group">
                    <label for="sideA">Lado A (m):</label>
                    <input type="number" id="sideA" required>
                </div>
                <div class="form-group">
                    <label for="sideB">Lado B (m):</label>
                    <input type="number" id="sideB" required>
                </div>
            `;
            break;
        case 'hexagon':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="side">Lado (m):</label>
                    <input type="number" id="side" required>
                </div>
            `;
            break;
        case 'rhombus':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="diagonal1">Diagonal 1 (m):</label>
                    <input type="number" id="diagonal1" required>
                </div>
                <div class="form-group">
                    <label for="diagonal2">Diagonal 2 (m):</label>
                    <input type="number" id="diagonal2" required>
                </div>
                <div class="form-group">
                    <label for="side">Lado (m):</label>
                    <input type="number" id="side" required>
                </div>
            `;
            break;
        case 'circle':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="radius">Radio (m):</label>
                    <input type="number" id="radius" required>
                </div>
            `;
            break;
        case 'pentagon':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="side">Lado (m):</label>
                    <input type="number" id="side" required>
                </div>
            `;
            break;
        case 'octagon':
            inputs.innerHTML = `
                <div class="form-group">
                    <label for="side">Lado (m):</label>
                    <input type="number" id="side" required>
                </div>
            `;
            break;
    }
});

document.getElementById('geometryCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const shape = document.getElementById('shape').value;
    let area, perimeter;

    switch (shape) {
        case 'triangle':
            const base = parseFloat(document.getElementById('base').value);
            const height = parseFloat(document.getElementById('height').value);
            const sideA = parseFloat(document.getElementById('sideA').value);
            const sideB = parseFloat(document.getElementById('sideB').value);
            const sideC = parseFloat(document.getElementById('sideC').value);
            area = 0.5 * base * height;
            perimeter = sideA + sideB + sideC;
            break;
        case 'rectangle':
            const length = parseFloat(document.getElementById('length').value);
            const width = parseFloat(document.getElementById('width').value);
            area = length * width;
            perimeter = 2 * (length + width);
            break;
        case 'square':
            const side = parseFloat(document.getElementById('side').value);
            area = side * side;
            perimeter = 4 * side;
            break;
        case 'trapezoid':
            const base1 = parseFloat(document.getElementById('base1').value);
            const base2 = parseFloat(document.getElementById('base2').value);
            const heightTrapezoid = parseFloat(document.getElementById('height').value);
            const sideATrapezoid = parseFloat(document.getElementById('sideA').value);
            const sideBTrapezoid = parseFloat(document.getElementById('sideB').value);
            area = 0.5 * (base1 + base2) * heightTrapezoid;
            perimeter = base1 + base2 + sideATrapezoid + sideBTrapezoid;
            break;
        case 'hexagon':
            const sideHexagon = parseFloat(document.getElementById('side').value);
            area = (3 * Math.sqrt(3) / 2) * sideHexagon * sideHexagon;
            perimeter = 6 * sideHexagon;
            break;
        case 'rhombus':
            const diagonal1 = parseFloat(document.getElementById('diagonal1').value);
            const diagonal2 = parseFloat(document.getElementById('diagonal2').value);
            const sideRhombus = parseFloat(document.getElementById('side').value);
            area = 0.5 * diagonal1 * diagonal2;
            perimeter = 4 * sideRhombus;
            break;
        case 'circle':
            const radius = parseFloat(document.getElementById('radius').value);
            area = Math.PI * radius * radius;
            perimeter = 2 * Math.PI * radius;
            break;
        case 'pentagon':
            const sidePentagon = parseFloat(document.getElementById('side').value);
            area = (5 / 4) * sidePentagon * sidePentagon * Math.tan(Math.PI / 5);
            perimeter = 5 * sidePentagon;
            break;
        case 'octagon':
            const sideOctagon = parseFloat(document.getElementById('side').value);
            area = 2 * (1 + Math.sqrt(2)) * sideOctagon * sideOctagon;
            perimeter = 8 * sideOctagon;
            break;
    }

    // Mostrar el resultado
    document.getElementById('result').innerHTML = `
        <p>Área: ${area.toFixed(2)} m²</p>
        <p>Perímetro: ${perimeter.toFixed(2)} m</p>
    `;
});
