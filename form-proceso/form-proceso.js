
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


// API PROVINCIAS Y LOCALIDADES ARGENTINAS


const selectProvincias = document.getElementById("selectProvincias")
const selectLocalidad = document.getElementById("selectLocalidad")

function provincia() {

    fetch("https://apis.datos.gob.ar/georef/api/provincias") //Llamo a la API
        .then(res => res.ok ? res.json() : Promise.reject(res)) //Si es true, convertir los resultados a formato json. Sino, rechazar
        .then(json => {
            console.log(json)

            const provincias = json.provincias;

            // Ordenar las provincias alfabéticamente
            provincias.sort(function(a, b) {
              return a.nombre.localeCompare(b.nombre);
            });

            let opciones = `<option value="--Seleccione Provincia--">--Seleccione Provincia--</option>`;

            json.provincias.forEach(element => {
                opciones += `<option value="${element.nombre}">${element.nombre}</option>`
            });

            selectProvincias.innerHTML = opciones;
        })
}

document.addEventListener("DOMContentLoaded", provincia) //Ejecutar la funcion cuando termine de cargar el DOM 


function localidad(provincia) {
    fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provincia}&max=5000`)
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(json => {
            console.log(json)

            const localidades = json.localidades;

            // Ordenar las localidades alfabéticamente
            localidades.sort(function(a, b) {
              return a.nombre.localeCompare(b.nombre);
            });


            let opciones = `<option value="--Seleccione Localidad--">--Seleccione Localidad--</option>`;

            json.localidades.forEach(element => {

                opciones += `<option value="${element.id}">${element.nombre}</option>`
            });

            selectLocalidad.innerHTML = opciones;
        })
}

selectProvincias.addEventListener("change", e => {
    localidad(e.target.value);
})

function agregarGuion() {
    nroTarjeta = document.getElementById("inputTarjeta").value

    if(nroTarjeta.length == 4 || nroTarjeta.length == 9 ||
        nroTarjeta.length == 14){
      nroTarjeta += "-";
      document.getElementById("inputTarjeta").value = nroTarjeta; 
    }

  }

 