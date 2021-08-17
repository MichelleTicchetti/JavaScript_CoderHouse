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


/*Declaracion de variables para guardar el resultado del select
let consulta = document.getElementById("consulta").value;
let estudio = document.getElementById("estudio").value;
let cirugia = document.getElementById("cirugia").value;*/

let consulta, estudio, cirugia;
let p1=0, p2=0, p3=0, total;
let idPaciente, nombrePac, apellidoPac, telefonoPac, emailPac;
const arrayPacientes = [];

class Paciente{

  //constructor 
  constructor(id, nombre, apellido, telefono, email){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.email = email;
  }
  
  //aplico los siguientes métodos únicamente para cumplir con el enunciado de la entrega pero no formará parte del proyecto final
  saludar(){
    console.log("Hola, soy "+this.nombre+" "+this.apellido+". Mi ID de paciente es: "+this.id+". Mi teléfono es "+this.telefono+". Mi email es "+this.email);
  }
    
}

//esto se va a eliminar cuando pueda traer los datos desde el input del form
let ingresarPaciente = prompt("¿Desea ingresar paciente? [SI/NO].");

while(ingresarPaciente=="SI"){

idPaciente = prompt("Ingrese el ID del paciente");
nombrePac = prompt("Ingrese el nombre del paciente");
apellidoPac = prompt("Ingrese el apellido del paciente");
telefonoPac = prompt("Ingrese el teléfono del paciente");
emailPac = prompt("Ingrese el email del paciente");
  
const paciente= new Paciente(idPaciente, nombrePac, apellidoPac, telefonoPac, emailPac);

//esto se va a eliminar cuando pueda traer los datos desde el select del form
consulta = prompt("Ingrese tipo de consulta");
switch(consulta){

  case "Particular":
    p1= CONS_PART;
    break;
  case "Prepaga":
    p1= CONS_PREPA;
    break;
  case "Obra Social":
    p1= CONS_OBRASOC;
    break;
  case "PAMI":
    p1= CONS_PAMI;
    break;
  default:
    p1= CONS_PLANSALUD;
}

//esto se va a eliminar cuando pueda traer los datos desde el select del form
estudio = prompt("Ingrese estudio realizado");
if(estudio != "--"){

   switch(estudio){

    case "Campo Visual Computarizado":
    p2= EST_CAMPOVIS;
    break;

    case "Interferometría (Test de Lotmar, PAM)":
    p2= EST_INTERFER;
    break;

    case "Capsulotomía con Yag":
    p2= EST_CAPSULYAG;
    break;

    case "Ecometría":
    p2= EST_ECOMET;
    break;

    case "Ecografía":
    p2= EST_ECO;
    break;

    case "Láser. crío, diatermia de baja complejidad":
    p2= EST_LASER;
    break;

    case "Fuera de Cápita - Paquimetría":
    p2= EST_PAQUIM;
    break;

    case "Fuera de Cápita - OCT":
    p2= EST_OCT;
    break;

    case "Fuera de Cápita - Tomografía confocal del nervio óptico":
    p2= EST_TOMONERVOPT;
    break;

    case "Fuera de Cápita - Tomografía corneal":
    p2= EST_TOMOCORN;
    break;

    case "Fuera de Cápita - UBM":
    p2= EST_UBM;
    break;     
  }

}

//esto se va a eliminar cuando pueda traer los datos desde el select del form
cirugia = prompt("Ingrese cirugía realizada");
if(cirugia != "--"){
   
  switch(cirugia){

    case "Vitrectomía":
      p3= CIR_VITRE;
      break;

    case "FacoVitrectomía":
      p3= CIR_FACOVITRE;
      break;
  
    case "Facoemulsificación":
      p3= CIR_CATA;
      break;
  
    case "Membrana epiretinal":
      p3= CIR_MER;
      break

    case "Refractiva":
      p3= CIR_REFRA;
      break;

    case "Trabeculectomia":
      p3= CIR_TRABE;
      break

    case "Aplicación Intravítrea de Antiangiogénicos":
      p3=CIR_AAG;
      break

    case "Blefaroplastia":
      p3= CIR_BLEFA;
      break

    case "Ptosis palpebral":
      p3= CIR_PTOSIS;
      break
    
}

}

total= sumar(p1,p2,p3);



function sumar(num1, num2, num3){
return num1+num2+num3
}


function mostrarConsulta(){
  console.log("ID Paciente: "+idPaciente+"; Consulta: "+consulta+"; Estudio: "+estudio+"; Cirugía: "+cirugia)
}

arrayPacientes.push(paciente);
paciente.saludar();
mostrarConsulta();
console.log("Total de mi consulta: $"+total);

ingresarPaciente = prompt("¿Desea ingresar paciente? [SI/NO].");
}

console.log(arrayPacientes);