
selectSucursal = document.getElementById("tipoSucursal");
selectPlan = document.getElementById("tipoPlan");
selectPlan.disabled = true;

seleccionarSucu = selectPlan.querySelector('option[value="seleccione"]')

plan1 = selectPlan.querySelector('option[value="plan1"]')
plan2 = selectPlan.querySelector('option[value="plan2"]')
plan3 = selectPlan.querySelector('option[value="plan3"]')
plan4 = selectPlan.querySelector('option[value="plan4"]')
plan5 = selectPlan.querySelector('option[value="plan5"]')

selectSucursal.addEventListener("change", function () {
    if (selectSucursal.value == "cordoba") {
        selectPlan.disabled = false;
        selectPlan.value = "seleccione"

        plan1.disabled = false;
        plan2.disabled = false;
        plan3.disabled = false;
        plan4.disabled = false;
        plan5.disabled = false;

    } else if (selectSucursal.value == "caba") {
        selectPlan.disabled = false;
        selectPlan.value = "seleccione"

        plan1.disabled = false;
        plan2.disabled = false;
        plan3.disabled = false;
        plan4.disabled = false;
        plan5.disabled = true;

    } else if (selectSucursal.value == "lomas") {
        selectPlan.disabled = false;
        selectPlan.value = "seleccione"

        plan1.disabled = false;
        plan2.disabled = true;
        plan3.disabled = true;
        plan4.disabled = false;
        plan5.disabled = true;

    } else if (selectSucursal.value == "mendoza") {
        selectPlan.disabled = false;
        selectPlan.value = "seleccione"

        plan1.disabled = false;
        plan2.disabled = false;
        plan3.disabled = true;
        plan4.disabled = false;
        plan5.disabled = true;

    }
    else {
        selectPlan.disabled = true;
        selectPlan.value = "seleccione"

    }
});
