function updateForm() {
    const calculationType = document.getElementById('calculationType').value;
    const inputFields = document.getElementById('inputFields');
    
    let fields = '';

    switch (calculationType) {
        case 'a':
            fields = `
                <div class="form-group">
                    <label for="b">Cateto b</label>
                    <input type="number" id="b" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="c">Hipotenusa c</label>
                    <input type="number" id="c" class="form-control" required>
                </div>`;
            break;
        case 'b':
            fields = `
                <div class="form-group">
                    <label for="a">Cateto a</label>
                    <input type="number" id="a" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="c">Hipotenusa c</label>
                    <input type="number" id="c" class="form-control" required>
                </div>`;
            break;
        case 'c':
            fields = `
                <div class="form-group">
                    <label for="a">Cateto a</label>
                    <input type="number" id="a" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="b">Cateto b</label>
                    <input type="number" id="b" class="form-control" required>
                </div>`;
            break;
    }

    inputFields.innerHTML = fields;
}

function calculate() {
    const calculationType = document.getElementById('calculationType').value;
    let result;

    switch (calculationType) {
        case 'a':
            const bForA = parseFloat(document.getElementById('b').value);
            const cForA = parseFloat(document.getElementById('c').value);
            result = Math.sqrt(cForA * cForA - bForA * bForA);
            break;
        case 'b':
            const aForB = parseFloat(document.getElementById('a').value);
            const cForB = parseFloat(document.getElementById('c').value);
            result = Math.sqrt(cForB * cForB - aForB * aForB);
            break;
        case 'c':
            const aForC = parseFloat(document.getElementById('a').value);
            const bForC = parseFloat(document.getElementById('b').value);
            result = Math.sqrt(aForC * aForC + bForC * bForC);
            break;
    }

    document.getElementById('resultValue').innerText = `Resultado: ${result.toFixed(2)}`;
}
