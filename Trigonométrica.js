document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('trigCalculator').addEventListener('submit', calculate);
});

function calculate(event) {
    event.preventDefault();

    const trigFunction = document.getElementById('trigFunction').value;
    const outputUnit = document.querySelector('input[name="outputUnit"]:checked').value;
    let resultValue;

    switch (trigFunction) {
        case 'sine':
            const a_sin = parseFloat(document.getElementById('a').value);
            const c_sin = parseFloat(document.getElementById('c').value);
            resultValue = a_sin / c_sin;
            break;
        case 'cosine':
            const b_cos = parseFloat(document.getElementById('b').value);
            const c_cos = parseFloat(document.getElementById('c').value);
            resultValue = b_cos / c_cos;
            break;
        case 'tangent':
            const a_tan = parseFloat(document.getElementById('a').value);
            const b_tan = parseFloat(document.getElementById('b').value);
            resultValue = a_tan / b_tan;
            break;
        case 'cotangent':
            const a_cot = parseFloat(document.getElementById('a').value);
            const b_cot = parseFloat(document.getElementById('b').value);
            resultValue = b_cot / a_cot;
            break;
        case 'secant':
            const b_sec = parseFloat(document.getElementById('b').value);
            const c_sec = parseFloat(document.getElementById('c').value);
            resultValue = c_sec / b_sec;
            break;
        case 'cosecant':
            const a_csc = parseFloat(document.getElementById('a').value);
            const c_csc = parseFloat(document.getElementById('c').value);
            resultValue = c_csc / a_csc;
            break;
        default:
            resultValue = 'Función desconocida';
    }

    const resultDiv = document.getElementById('result');
    if (outputUnit === 'degrees') {
        resultDiv.innerHTML = `<p>Resultado en grados: ${(resultValue * (180 / Math.PI)).toFixed(5)}°</p>`;
    } else {
        resultDiv.innerHTML = `<p>Resultado en radianes: ${resultValue.toFixed(5)}</p>`;
    }
}
