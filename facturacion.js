const CONTINUE = "SI";

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
const EST_LASER= 3000;
const EST_PAQUIM= 1500;
const EST_OCT= 2500;
const EST_TOMONERVOPT= 2000;
const EST_TOMOCORN= 2000;
const EST_UBM= 1500;

//Valores Cirugias
const CIR_CATA = 5000;
const CIR_MER = 1000;
const CIR_VITRE = 7000;
const CIR_FACOVITRE = 10000;
const CIR_REFRA = 15000;
const CIR_TRABE = 6000;
const CIR_AAG = 5000;
const CIR_BLEFA = 10000;
const CIR_PTOSIS = 10000;


let consulta;
let estudio;
let cirugia;
let p1=0;
let p2=0;
let p3=0;
let totalConsulta;
let totalRecaudacion = 0;
let idPaciente;
let nombrePac;
let apellidoPac;
let telefonoPac;
let emailPac;
let arrayPacientes =[];
let arrayConsultas = [];

class Paciente{

  constructor(id, nombre, apellido, telefono, email){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido.toUpperCase();
    this.telefono = telefono;
    this.email = email;
  }
    
}

class ConsultaPaciente{

  constructor(paciente, consulta, estudio, cirugia, totalConsulta){
    this.paciente = paciente
    this.consulta = consulta
    this.estudio = estudio
    this.cirugia = cirugia
    this.totalConsulta = totalConsulta;
  }

}


let ingresarPaciente = prompt("¿Desea ingresar paciente? [SI/NO].");

let msjInput = "Ingrese el ";
let dato = "";

function ingresarDatoStringObligatorio(dato) {
  let cadena = prompt(msjInput + dato)

  while(cadena===""){
    alert("Debe inserir un dato.")
    cadena = prompt(msjInput + dato);
  }

  return cadena;
}

function ingresarDatoString(dato) {
  let cadena = prompt(msjInput + dato);
  return cadena;
}

while(ingresarPaciente.toUpperCase()===CONTINUE){  
idPaciente = ingresarDatoStringObligatorio("ID del paciente");
nombrePac = ingresarDatoStringObligatorio("nombre del paciente");
apellidoPac = ingresarDatoStringObligatorio("apellido del Paciente");
telefonoPac = ingresarDatoString("teléfono del paciente");
emailPac = ingresarDatoString("email del paciente");
  
let paciente= new Paciente(idPaciente, nombrePac, apellidoPac, telefonoPac, emailPac)
arrayPacientes.push(paciente)

consulta= prompt("Ingrese tipo de consulta")

switch(consulta.toUpperCase()){

  case "PARTICULAR":
    p1= CONS_PART;
    break;
  case "PREPAGA":
    p1= CONS_PREPA;
    break;
  case "OBRA SOCIAL":
    p1= CONS_OBRASOC;
    break;
  case "PAMI":
    p1= CONS_PAMI;
    break;
  default:
    p1= CONS_PLANSALUD;
}

estudio = prompt("Ingrese estudio realizado");
if(estudio != "--"){

   switch(estudio.toUpperCase()){

    case "CAMPO VISUAL COMPUTARIZADO":
    p2= EST_CAMPOVIS;
    break;

    case "INTERFEROMETRIA":
    p2= EST_INTERFER;
    break;

    case "CAPSULOTOMÍA CON YAG":
    p2= EST_CAPSULYAG;
    break;

    case "ECOMETRÍA":
    p2= EST_ECOMET;
    break;

    case "ECOGRAFÍA":
    p2= EST_ECO;
    break;

    case "LÁSER":
    p2= EST_LASER;
    break;

    case "PAQUIMETRÍA":
    p2= EST_PAQUIM;
    break;

    case "OCT":
    p2= EST_OCT;
    break;

    case "TOMOGRAFÍA CONFOCAL DEL NERVIO ÓPTICO":
    p2= EST_TOMONERVOPT;
    break;

    case "TOMOGRAFÍA CORNEAL":
    p2= EST_TOMOCORN;
    break;

    case "UBM":
    p2= EST_UBM;
    break;     
  }

}

cirugia = prompt("Ingrese cirugía realizada");
if(cirugia != "--"){
   
  switch(cirugia.toUpperCase()){

    case "VITRECTOMÍA":
      p3= CIR_VITRE;
      break;

    case "FACOVITRECTOMÍA":
      p3= CIR_FACOVITRE;
      break;
  
    case "FACOEMULSIFICACIÓN":
      p3= CIR_CATA;
      break;
  
    case "MEMBRANA EPIRETINAL":
      p3= CIR_MER;
      break

    case "REFRACTIVA":
      p3= CIR_REFRA;
      break;

    case "TRABECULECTOMÍA":
      p3= CIR_TRABE;
      break

    case "ANTIANGIOGÉNICOS":
      p3=CIR_AAG;
      break

    case "BLEFAROPLASTIA":
      p3= CIR_BLEFA;
      break

    case "PTOSIS PALPEBRAL":
      p3= CIR_PTOSIS;
      break
    
}

}

function sumar(num1, num2, num3){
return num1+num2+num3
}

function mostrarConsulta(){
  console.log(`ID Paciente: ${idPaciente} - Paciente: ${nombrePac} ${apellidoPac} - Consulta: ${consulta} ${estudio} ${cirugia}`)
}

totalConsulta= sumar(p1,p2,p3)
totalRecaudacion += totalConsulta
mostrarConsulta()


console.log("Total de mi consulta: $"+totalConsulta)

let consultaXPaciente = new ConsultaPaciente(paciente, consulta, estudio, cirugia, totalConsulta)
arrayConsultas.push(consultaXPaciente)

ingresarPaciente = prompt("¿Desea ingresar paciente? [SI/NO].")
}

console.log(arrayPacientes)

let listaPacientesFecha = document.getElementById('listaPacientesFecha')


const mostrarConsultas = (arrayConsultas) => {

  for(let i = 0; i < arrayConsultas.length; i++){
    let itemConsulta = document.createElement('li')
    itemConsulta.textContent=`Paciente: ${arrayConsultas[i].paciente.apellido}, ${arrayConsultas[i].paciente.nombre}. Descripción: ${arrayConsultas[i].consulta} ${arrayConsultas[i].estudio}  ${arrayConsultas[i].cirugia}. TOTAL: $ ${arrayConsultas[i].totalConsulta}`
    listaPacientesFecha.appendChild(itemConsulta)
  }
}

let totalDia = document.getElementById('recaudacionTotal')

const mostrarTotalRecaudacion = (totalRecaudacion) =>{
  let mostrarRecaudacion = document.createElement('h2')
  mostrarRecaudacion.textContent=`Total recaudado: $${totalRecaudacion}`
  totalDia.appendChild(mostrarRecaudacion)

}

mostrarConsultas(arrayConsultas)
mostrarTotalRecaudacion(totalRecaudacion)


 
