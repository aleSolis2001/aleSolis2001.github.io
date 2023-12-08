function Calcular() {
    const pesoInput = document.getElementById("pesoInput");
    const mantenimiento = document.getElementById("mantenimiento");
    const mMedio = document.getElementById("medio")
    const resultadoOutput = document.getElementById("resultado");

    if (pesoInput.value !== "" && pesoInput.value > 0) {
        const peso = parseFloat(pesoInput.value);
        let hidratacionBasal = 0;

        if (peso <= 10) {
            hidratacionBasal = peso * 100;
        } else if (peso <= 20) {
            hidratacionBasal = 1000 + (peso - 10) * 50;
        } else if (peso <= 30) {
            hidratacionBasal = 1000 + 500 + (peso - 20) * 20;
        } else {
            const sC = ( (peso * 4) + 7) / (peso + 90)
            const hidratacionBasal1500 = Math.round(sC * 1500)
            const hidratacionBasal2000 = Math.round(sC * 2000)
            resultadoOutput.innerHTML = "Volumen diario: <span class='resaltar'>" + `${hidratacionBasal1500} - ${hidratacionBasal2000}` + "</span> cc";
            mantenimiento.innerHTML = "Mantenimiento: <span class='resaltar'>" + `${(hidratacionBasal1500 / 24).toFixed(1)} - ${(hidratacionBasal2000 / 24).toFixed(1)} ` + "</span> cc/hr";
            mMedio.innerHTML = "m + m/2: <span class='resaltar'>" + `${(hidratacionBasal1500 + hidratacionBasal1500 / 2)} - ${(hidratacionBasal2000 + hidratacionBasal2000 / 2)} ` + "</span> cc/hr";
            return;
        }

        resultadoOutput.innerHTML = "Volumen diario: <span class='resaltar'>" + hidratacionBasal + "</span> cc";
        mantenimiento.innerHTML = "Mantenimiento: <span class='resaltar'>" + (hidratacionBasal / 24).toFixed(1) + "</span> cc/hr"
        mMedio.innerHTML = "m + m/2: <span class='resaltar'>" + (hidratacionBasal + hidratacionBasal / 2) + "</span> cc/hr"
    } else {
        resultadoOutput.innerHTML = "Por favor, ingrese un peso válido"
    }
}
