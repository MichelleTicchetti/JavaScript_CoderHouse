//Valores Tipo de Consu5lta
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
    this.nombre = nombre.toUpperCase();
  }
}

class Paciente {
  constructor(id, nombre, apellido, telefono, email) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido.toUpperCase();
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

const form = document.getElementById("form");
const recTot = document.getElementById("recaudacionTotal");
const fechaHoy = document.getElementById("fecha");
const idDr = document.getElementById("idMedico");
const nombreDr = document.getElementById("nombreMedico");
const inputIdPaciente = document.getElementById("idPaciente");
const inputNombrePaciente = document.getElementById("nombrePaciente");
const inputApellidoPaciente = document.getElementById("apellidoPaciente");
const inputTelefonoPaciente = document.getElementById("telPaciente");
const inputEmailPaciente = document.getElementById("emailPaciente");

function getSelectedConsulta() {
  let selectedValue = document.getElementById("consulta").value;
  return selectedValue;
}

function getSelectedEstudio() {
  let selectedValue = document.getElementById("estudio").value;
  return selectedValue;
}

function getSelectedCirugia() {
  let selectedValue = document.getElementById("cirugia").value;
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const date = fechaHoy.value;
  const fecha = new Fecha(date);
  localStorage.setItem("fecha", JSON.stringify(fecha));

  const docId = idDr.value;
  const docNombre = nombreDr.value;
  const medico = new Medico(docId, docNombre);
  localStorage.setItem("medico", JSON.stringify(medico));
  arrayMedicos.push(medico);

  const id = inputIdPaciente.value;
  const nombre = inputNombrePaciente.value;
  const apellido = inputApellidoPaciente.value;
  const tel = inputTelefonoPaciente.value;
  const email = inputEmailPaciente.value;

  const paciente = new Paciente(id, nombre, apellido, tel, email);
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

  console.log("Total de mi consulta: $" + totalConsulta);

  console.log(arrayConsultas);
  console.log(arrayMedicos);
  console.log(arrayPacientes);

  let listaPacientesFecha = document.getElementById("listaPacientesFecha");

  mostrarConsultas(date, medico, paciente, consultaXPaciente);

  function mostrarConsultas(f, m, p, c) {
    let itemConsulta = document.createElement("li");

    itemConsulta.textContent = `Fecha: ${f}, Medico: ${m.nombre}. Paciente: ${p.apellido}, ${p.nombre}. Descripción: [Consulta] ${c.consulta}, [Estudio] ${c.estudio}, [Cirugía] ${c.cirugia}. TOTAL: $ ${c.totalConsulta}`;

    listaPacientesFecha.appendChild(itemConsulta);
  }

  document.getElementById("form").reset();
});
