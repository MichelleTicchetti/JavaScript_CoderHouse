//Valores Tipo de Consulta
const CONS_PART = 1500;
const CONS_PREPA = 300;
const CONS_OBRASOC = 250;
const CONS_PAMI = 500;
const CONS_PLANSALUD = 0;

//Valores Estudios
const EST_CAMPOVIS = 1500;
const EST_INTERFER = 800;
const EST_CAPSULYAG = 2500;
const EST_ECOMET = 1500;
const EST_ECO = 2500;
const EST_LASER = 3000;
const EST_PAQUIM = 1500;
const EST_OCT = 2500;
const EST_TOMONERVOPT = 2000;
const EST_TOMOCORN = 2000;
const EST_UBM = 1500;

//Valores Cirugias
const CIR_MER = 1000;
const CIR_VITRE = 7000;
const CIR_FACOEMU = 5000;
const CIR_FACOVITRE = 10000;
const CIR_REFRA = 15000;
const CIR_TRABE = 6000;
const CIR_AAG = 5000;
const CIR_BLEFA = 10000;
const CIR_PTOSIS = 10000;

class Fecha {
  constructor(fecha) {
    this.fecha = fecha;
  }
}

class Medico {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }
}

class Paciente {
  constructor(id, nombre, apellido, telefono, email) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.email = email;
  }
}

class Consulta {
  constructor(consulta, estudio, cirugia, totalConsulta) {
    this.consulta = consulta;
    this.estudio = estudio;
    this.cirugia = cirugia;
    this.totalConsulta = totalConsulta;
  }
}

let arrayConsultas = JSON.parse(localStorage.getItem("consultas"));

if (!arrayConsultas) {
  arrayConsultas = [];
}

let arrayPacientes = JSON.parse(localStorage.getItem("pacientes"));

if (!arrayPacientes) {
  arrayPacientes = [];
}

let arrayMedicos = JSON.parse(localStorage.getItem("medicos"));

if (!arrayMedicos) {
  arrayMedicos = [];
}

function getSelectedConsulta() {
  let selectedValue = $("#consulta").val();
  return selectedValue;
}

function getSelectedEstudio() {
  let selectedValue = $("#estudio").val();
  return selectedValue;
}

function getSelectedCirugia() {
  let selectedValue = $("#cirugia").val();
  return selectedValue;
}

function calcularConsulta(consulta) {
  let precioConsulta = 0;

  switch (consulta) {
    case "null":
      precioConsulta = 0;
      break;
    case "Particular":
      precioConsulta = CONS_PART;
      break;
    case "Prepaga":
      precioConsulta = CONS_PREPA;
      break;
    case "Obra Social":
      precioConsulta = CONS_OBRASOC;
      break;
    case "PAMI":
      precioConsulta = CONS_PAMI;
      break;
    default:
      precioConsulta = CONS_PLANSALUD;
  }

  return precioConsulta;
}

function calcularEstudio(estudio) {
  let precioEstudio = 0;

  switch (estudio) {
    case "null":
      precioEstudio = 0;
      break;

    case "Campo Visual Computarizado":
      precioEstudio = EST_CAMPOVIS;
      break;

    case "Interferometria":
      precioEstudio = EST_INTERFER;
      break;

    case "Capsulotomia con Yag":
      precioEstudio = EST_CAPSULYAG;
      break;

    case "Ecometria":
      precioEstudio = EST_ECOMET;
      break;

    case "Ecografia":
      precioEstudio = EST_ECO;
      break;

    case "Laser":
      precioEstudio = EST_LASER;
      break;

    case "Paquimetria":
      precioEstudio = EST_PAQUIM;
      break;

    case "OCT":
      precioEstudio = EST_OCT;
      break;

    case "Tomografia Nervio Optico":
      precioEstudio = EST_TOMONERVOPT;
      break;

    case "Tomografia Corneal":
      precioEstudio = EST_TOMOCORN;
      break;

    case "UBM":
      precioEstudio = EST_UBM;
      break;
  }

  return precioEstudio;
}

function calcularCirugia(cirugia) {
  let precioCirugia = 0;

  switch (cirugia) {
    case "null":
      precioCirugia = 0;
      break;

    case "Refractiva":
      precioCirugia = CIR_REFRA;
      break;

    case "Facoemulsificacion":
      precioCirugia = CIR_FACOEMU;
      break;

    case "Vitrectomia":
      precioCirugia = CIR_VITRE;
      break;

    case "Trabeculotomia":
      precioCirugia = CIR_TRABE;
      break;

    case "AAG":
      precioCirugia = CIR_AAG;
      break;

    case "MER":
      precioCirugia = CIR_MER;
      break;

    case "Blefaroplastia":
      precioCirugia = CIR_BLEFA;
      break;

    case "Ptosis Palpebral":
      precioCirugia = CIR_PTOSIS;
      break;

    case "Facovitrectomia":
      precioCirugia = CIR_FACOVITRE;
      break;
  }

  return precioCirugia;
}

function sumar(num1, num2, num3) {
  return num1 + num2 + num3;
}

$("#form").submit(function (event) {
  event.preventDefault();

  const date = $("#fecha").val();
  const fecha = new Fecha(date);
  localStorage.setItem("fecha", JSON.stringify(fecha));

  const docId = parseInt($("#idMedico").val(), 10);

  if (!Number.isInteger(docId)) {
    setTimeout(function () {
      $("#idMedico").focus();
    }, 1500);
    return swal("Carga Incorrecta", "Se han cargado datos inválidos.", "error");
  }

  const docNombre = $("#nombreMedico").val();

  if (!/^[a-zA-Z\u00C0-\u00FF ]*$/.test(docNombre)) {
    setTimeout(function () {
      $("#nombreMedico").focus();
    }, 1500);
    return swal("Carga Incorrecta", "Se han cargado datos inválidos.", "error");
  }

  const medico = new Medico(docId, docNombre);
  localStorage.setItem("medico", JSON.stringify(medico));
  arrayMedicos.push(medico);

  const pacId = parseInt($("#idPaciente").val(), 10);

  if (!Number.isInteger(docId)) {
    setTimeout(function () {
      $("#idPaciente").focus();
    }, 1500);
    return swal("Carga Incorrecta", "Se han cargado datos inválidos.", "error");
  }

  const pacNombre = $("#nombrePaciente").val();

  if (!/^[a-zA-Z\u00C0-\u00FF ]*$/.test(pacNombre)) {
    setTimeout(function () {
      $("#nombrePaciente").focus();
    }, 1500);

    return swal("Carga Incorrecta", "Se han cargado datos inválidos.", "error");
  }

  const pacApellido = $("#apellidoPaciente").val();

  if (!/^[a-zA-Z\u00C0-\u00FF ]*$/.test(pacApellido)) {
    setTimeout(function () {
      $("#apellidoPaciente").focus();
    }, 1500);
    return swal("Carga Incorrecta", "Se han cargado datos inválidos.", "error");
  }

  const pacTel = $("#telPaciente").val();

  const pacEmail = $("#emailPaciente").val();

  /*if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(pacEmail)) {
    setTimeout(function () {
      $("#emailPaciente").focus();
    }, 1500);
    return swal("Carga Incorrecta", "Se han cargado datos inválidos.", "error");
  }*/

  const paciente = new Paciente(
    pacId,
    pacNombre,
    pacApellido,
    pacTel,
    pacEmail
  );

  localStorage.setItem("paciente", JSON.stringify(paciente));
  arrayPacientes.push(paciente);

  const consulta = getSelectedConsulta();
  let p1 = calcularConsulta(consulta);
  console.log("Consulta: $" + p1);

  const estudio = getSelectedEstudio();
  let p2 = calcularEstudio(estudio);
  console.log("Estudio: $" + p2);

  const cirugia = getSelectedCirugia();
  let p3 = calcularCirugia(cirugia);
  console.log("Cirugía: $" + p3);

  let totalConsulta = sumar(p1, p2, p3);
  console.log("Total Consulta: $" + totalConsulta);

  const consultaXPaciente = new Consulta(
    consulta,
    estudio,
    cirugia,
    totalConsulta
  );

  localStorage.setItem("consulta", JSON.stringify(consultaXPaciente));
  arrayConsultas.push(consultaXPaciente);

  console.log(arrayConsultas);
  console.log(arrayMedicos);
  console.log(arrayPacientes);

  let listaPacientesFecha = $("#listaPacientesFecha");

  mostrarConsultas(date, medico, paciente, consultaXPaciente);

  function mostrarConsultas(d, m, p, c) {
    let itemConsulta = document.createElement("li");

    itemConsulta.textContent = `Fecha: ${d}, Medico: [ID]${m.id}, ${m.nombre}. Paciente: ${p.apellido}, ${p.nombre}. Descripción: [Consulta] ${c.consulta}, [Estudio] ${c.estudio}, [Cirugía] ${c.cirugia}. TOTAL: $ ${c.totalConsulta}`;

    listaPacientesFecha.append(itemConsulta);
  }

  swal("Carga Exitosa", "Se han cargado correctamente los datos.", "success");

  $("#form")[0].reset();
});

$(".info").prepend('<button id="btnInfo">+Info</button>');
$(".info").prepend(` 
                    <div id="div1" style="display: none">
                    <div id= "table">
                    <table class="paleBlueRows">
                    <thead>
                    <tr>
                    <th>Doctor/a</th>
                    <th>ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                    <td>Dra.Luciana R.</td>
                    <td>0001</td>
                    </tr>
                    <tr>
                    <td>Dr. Juan G.</td>
                    <td>0002</td>
                    </tr>
                    <tr>
                    <td>Dr. Fernando H.</td>
                    <td>0003</td>
                    </tr>
                    <tr>
                    <td>Dra. María L.</td>
                    <td>0004</td>
                    </tr>
                    <tr>
                    <td>Dra. Noelia P.</td>
                    <td>0005</td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
                    </div>
                `);
$("#div1").prepend(
  '<button id="btnHide">Haga click para ocultar información</button>'
);
$("#btnInfo").click(() => {
  $("#div1").slideDown(3000, () => {});
});

$("#btnHide").click(() => {
  $("#div1").slideUp(3000, () => {});
});

// GET A archivo-local.json

const URL_ARCHIVO_JSON = "../db/data.json";

$("#div1").prepend(
  '<button id="btnGet"> GET Lista de Precios de Consultas</button>'
);

$("#btnGet").click(() => {
  $.getJSON(URL_ARCHIVO_JSON, (response, status) => {
    if (status === "success") {
      let precios = response;

      for (const precio of precios) {
        $("#div1").prepend(
          `
      <div id="valores">
        <h5>${precio.title}</h5>
        <p>${precio.body}</p>
      </div>
      `
        );
      }
    }
  });
});
