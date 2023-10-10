class Taller{
    constructor(id, nombre, duracion, precio, imagen, descripcion){
       this.id = id,
       this.nombre = nombre,
       this.duracion = duracion,
       this.precio = precio,
       this.imagen = imagen,
       this.descripcion = descripcion
    }
    mostrarTaller(){
       console.log(`El taller ${this.nombre} tiene una duracion de ${this.duracion} y su precio es ${this.precio}`)
    }
    devolverTaller(){
      return `${this.id}-El taller ${this.nombre} tiene una duracion de ${this.duracion} y su precio es $${this.precio}`
   }
 }

 const HHSS = new Taller(1,"Habilidades Sociales", "12 semanas", 120000, "Hhss.jpg", "Desarrollo de conductas socio-emocionales adaptativas para la vida diaria")
 
 const EstCognitiva = new Taller(2,"Estimulacion Cognitiva", "6 semanas", 80000, "EstCog.jpg", "Refuerzo y desarrollo de las funciones ejecutivas, las cuales comprenden: planificacion, atencion, organizacion, procesamiento de informacion.")
 
 const HHEE = new Taller(3,"Habilidades Escolares", "4 semanas", 50000, "Hhee.jpg", "Estas habilidades involucran la capacidad de lectura, escritura, análisis, síntesis, organización.")
 
 const TallerPadres = new Taller(4,"Taller a Padres","24 semanas", 160000, "Tallerpadres.jpg", "Ofrecer elementos para que los padres descubran la importancia de conocer todos los aspectos de la vida de sus hijos como asi tambien ampliar sus recursos parentales.")
 
 const EstTemprana = new Taller(5,"Estimulacion Temprana", "3 semanas", 40000, "Eett.jpg", "onjunto de técnicas de intervención educativas que pretende impulsar el desarrollo cognitivo, social y emocional del niño durante la etapa infantil")
 
 const PrimerosCuidados = new Taller(6,"Primeros Cuidados (Infancia Temprana)", "2 semanas", 20000, "1Cuidados.jpg", "Una revisión general de los primeros cuidados que va a recibir tu bebé en casa después del nacimiento, pasando desde crecimiento y desarrollo.")

 const talleres = [HHSS, EstCognitiva, HHEE,TallerPadres, EstTemprana, PrimerosCuidados]

 let seleccionTaller = JSON.parse(localStorage.getItem("carrito")) ?? []

localStorage.setItem("talleres", JSON.stringify(talleres))


 // COMENTADO
/* function ReservarTaller(){
    let salirMenu = false
    do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
       1 - Elegir Taller
       2 - Mostrar Carrito de Talleres
       3 - Borrar Taller
       4 - Buscar por nombre de taller
       5 - Buscar por duracion del taller
       6 - Ordenar mayor a menor por precio
       break   
       7 - Finalizar Compra               
       0 - Salir del menu`))
       switch(opcionIngresada){
          case 1:
             elegirTaller()
          break
          case 2:
             mostrarCarrito(seleccionTaller)
   
          break
          case 3:
            borrarTaller(seleccionTaller)
           break 
          case 4:
            buscarNombre(talleres)
           break
           case 5:
            buscarDuracion(talleres)
           break
           case 6:
            ordenarMayorMenor(talleres) 
           break
           case 7:
            totalCarrito(seleccionTaller) 
         break
          case 0:
             salirMenu = true
          default:
             alert("Opción no válida, ingrese alguna presente en el menu")
          break
       }
    }while(!salirMenu)

} */
/* function elegirTaller(){
   let taller = prompt("Ingrese el ID del taller: ")
   seleccionTaller.push (talleres[taller-1])
   mostrarLista(seleccionTaller)
} */
 /* function reservarTurno (){
let pacienTe = prompt("Ingrese el nombre y apellido del paciente")
let terapia = 0
    let canTsesion1 = 0
    let canTsesion2 = 0
    let canTsesion3 = 0
    let canTsesion4 = 0
    let canTsesion5 = 0
    valorSesion = 6000 
    let sesiones=0
    alert(`A continuacion se detallan las terapias brindadas: \n1-Psicologia \n2-Psicopedagogia \n3-Terapia Ocupacional \n4-Musicoterapia \n5-Fonoaudiologia \n \n El valor por sesion es de $${valorSesion} \n\nIndique la opcion numerica correspondiente a la terapia deseada y la cantidad de sesiones semanales. Para finalizar ingrese el numero 0. \n\nLuego se realizara un presupuesto total a abonar, considerando que al superar mas de 12 sesiones semanales se realizara un descuento del 10%.`)

    terapia = parseInt(prompt("Indique la terapia que desea realizar"))

    while (terapia != 0){
        
        if(terapia>=1 && terapia<=5){
            sesiones = parseInt(prompt("Cuantas sesiones necesita?"))
        }
        
        switch(terapia){
            case 1: canTsesion1 = canTsesion1 + sesiones 
            break;
            case 2: canTsesion2 = canTsesion2 + sesiones
        break;
        case 3: canTsesion3 = canTsesion3 + sesiones 
            break;
            case 4: canTsesion4 = canTsesion4 + sesiones 
                break;
        case 5: canTsesion5 = canTsesion5 + sesiones
            break;
            default: 
            alert("Opcion invalida");
            
        }
        
        terapia = parseInt(prompt("Indique una nueva terapia que desea sumar"))
    }
 */
/*     let cantTotal = canTsesion1 + canTsesion2 + canTsesion3 + canTsesion4 + canTsesion5
    let subTotal= cantTotal * valorSesion
    let Total = (cantTotal * valorSesion) - (cantTotal * valorSesion) * 0.1 

    alert(`Usted a seleccionado \n\nPsicologia: ${canTsesion1} sesiones \nPsicopedagogia: ${canTsesion2} sesiones \nTerapia Ocupacional: ${canTsesion3} sesiones \nMusicoterapia: ${canTsesion4} sesiones \nFonoaudiologia: ${canTsesion5} sesiones `)

    if (cantTotal >= 12) {alert(`El monto parcial para el/la paciente ${pacienTe.toUpperCase()} por ${cantTotal} sesiones a abonar es de $${subTotal}. \n\nDado que usted aplica al beneficio del descuento, su monto total a abonar es ${Total}`)
    }else{ alert(`El monto total para el/la paciente ${pacienTe.toLocaleUpperCase()} por ${cantTotal} sesiones a abonar es de $${subTotal}.`)}
  } */
/* function menu(){
    let salirMenu = false
    do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
       1 - Reservar Terapia
       2 - Elegir Taller
       0 - Salir del menu`))
       switch(opcionIngresada){
          case 1:
             reservarTurno()
          break
          case 2:
             ReservarTaller()
           break             
          case 0:
             alert(`Gracias por utilizar nuestra app. Saludos!`)
             salirMenu = true
          break   
          default:
             alert("Opción no válida, ingrese alguna presente en el menu")
          break
       }
    }while(!salirMenu)
} */  
/* function mostrarCarrito(seleccionTaller){
   let mensaje = "Nuestros talleres son \n"
   for(let taller of seleccionTaller){
       mensaje = mensaje + "\n"+ taller.devolverTaller()

   }
   alert(mensaje)
} */


//FUNCIONES

function mostrarCatalogoDOM(array){
   let containerTaller = document.getElementById("taller")
   containerTaller.innerHTML="" 
   for(let taller of array){
      let tallerNEWDiv = document.createElement("div")
      tallerNEWDiv.className = "col-12 col-md-6 col-lg-4 my-5"
      tallerNEWDiv.innerHTML = `<div id="${taller.id} class="card     " style="width: 18rem;">
      <img src="../img/${taller.imagen}" class="card-img-top " alt="">
      <div class="card-body ">
      <h5 class="card-title  ">${taller.nombre}</h5>
      <p class="card-text p-2  ">${taller.descripcion}</p>
      </div>
      <ul class="list-group list-group-flush ">
      <li class="list-group-item  text-center border-danger mb-3 "> Duracion: ${taller.duracion}</li>
      <li class="list-group-item  text-center">Precio: $${taller.precio}</li>
      </ul>
      <div class="card-body">
      <a href="#" id="agregarbtn${taller.id}" class=" d-flex btn btn-success btn-sm justify-content-center">Añadir a carrito</a>
      </div>
      </div>`
      containerTaller.append(tallerNEWDiv)
      let agregarbtn= document.getElementById(`agregarbtn${taller.id}`)
      agregarbtn.addEventListener("click", () => {
         agregarTaller(taller)
      })
   }
   }
function cargarCarrito(array){
      modalBody.innerHTML=""
    array.forEach( (productoCarrito) => {
      let item =document.createElement("div")
      
      item.innerHTML = `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
      <img class="card-img-top" height="300px" src="../img/${productoCarrito.imagen}" alt="">
      <div class="card-body">
             <h4 class="card-title">${productoCarrito.nombre}</h4>
             <p class="card-text">${productoCarrito.duracion}</p>
              <p class="card-text">$${productoCarrito.precio}</p> 
              <button type="button" class= "btn btn-danger btn-sm" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt">Eliminar</i></button>
      </div>    
   </div>`
   modalBody.append(item)
   let botonEliminar=null
   botonEliminar= document.getElementById(`botonEliminar${productoCarrito.id}`)
   botonEliminar.addEventListener("click", () => {
      console.log("eventClick---BtnEliminar")
      borrarTaller(productoCarrito)})
    })
   deshabilitarBoton()
    totalCarrito(array)
   }
   mostrarCatalogoDOM(talleres)   
function borrarTaller(elem){
   console.log("fnBorrarTaller: "+elem)
      let tallerEliminar = seleccionTaller.findIndex((taller) => taller.id == elem.id)
      tallerEliminar != undefined ?
          (seleccionTaller.splice(tallerEliminar,1),
          localStorage.setItem("carrito", JSON.stringify(seleccionTaller))):
          alert(`El taller ${elem.nombre} ya fue eliminado  `)
          cargarCarrito(seleccionTaller)
   
    }
function mostrarLista(array){
   let mensaje = "Nuestros talleres son \n"
   for(let taller of array){
       mensaje = mensaje + "\n"+ taller.devolverTaller()

   }
   alert(mensaje)
}
function buscarNombre(buscado, array){
   let busquedaT = array.filter(
      (elem) =>{ return elem.nombre.toLocaleLowerCase().includes(buscado.toLocaleLowerCase())})
      busquedaT.length >0 ?( mostrarCatalogoDOM(busquedaT)): mostrarCatalogoDOM(array)
   
   busquedaT.length > 0 ? (mostrarCatalogoDOM(busquedaT), busquedaTDiv.innerHTML=""):(mostrarCatalogoDOM(array), busquedaTDiv.innerHTML = `<h3>No hay coincidencias con su busqueda, estos son los talleres disponibles<h3>`)
   }
   function buscarPrecio(array, precioBusca){
      let menor = array.filter(
         (taller) => { return taller.precio <= precioBusca}
      )
      if(menor.length == 0){
         alert(`No hay coincidencias de talleres que tengan un precio menor o igual a $${precioBusca}`)
      } else {
      mostrarCatalogoDOM(menor)
      }
      return menor
   }
   function ordenarMayorMenor(array){
   let arrayMayorMenor = buscarPrecio(array, precioBuscar.value)
   arrayMayorMenor.sort((a,b) => b.precio - a.precio)
   console.log(arrayMayorMenor)
   mostrarCatalogoDOM(arrayMayorMenor)
   }
   function ordenarMenorMayor(array){
      let arrayMenorMayor = buscarPrecio(array, precioBuscar.value)
      arrayMenorMayor.sort((a,b) => a.precio - b.precio)
      console.log(arrayMenorMayor)
      mostrarCatalogoDOM(arrayMenorMayor)
      }
   function ordenarABC(array){
      let ordenadoAbc = buscarPrecio(array, precioBuscar.value)
      ordenadoAbc.sort(
         (a,b) =>{
            if(a.nombre>b.nombre){
               return 1
            }
            if(a.nombre<b.nombre){
               return -1
            }
            return 0
         }
      )
      mostrarCatalogoDOM(ordenadoAbc)
   }
   function totalCarrito (array){
   const totalRe = array.reduce((producto, elem) =>{ return producto + elem.precio},0)
      totalRe >0 ? precioTotal.innerHTML=  `<strong>El presupuesto total es $${totalRe}</strong>`:
      precioTotal.innerHTML=  `<strong>No posee talleres en su carrito</strong>`
   }
function agregarTaller(elem){
  let tallerAgregado = seleccionTaller.find((taller) => taller.id == elem.id)
  tallerAgregado == undefined ?
      (seleccionTaller.push(elem),
      localStorage.setItem("carrito", JSON.stringify(seleccionTaller)),
      console.log(seleccionTaller)):
      alert(`El taller ${elem.nombre} ya existe en el carrito`)
}
function deshabilitarBoton () {
   seleccionTaller.length == 0 ? botonFinalizarCompra.className='btn btn-success disabled' : botonFinalizarCompra.className='btn btn-success'}


//DOM
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let buscarTaller = document.getElementById("buscarTaller")
let precioBuscar = document.getElementById("precioBuscar")
let botonModal = document.getElementById("botonModal")
let modalBody = document.getElementById("modalBody")
let selectOrden = document.getElementById("selectOrden")
let talleresStorage = JSON.parse(localStorage.getItem("talleres"))
let precioTotal = document.getElementById("precioTotal")
let confirmarCompra = document.getElementById("confirmarCompra")


//EVENTOS
buscarTaller.addEventListener("input", () =>
{buscarNombre(buscarTaller.value, talleres)})
precioBuscar.addEventListener("keydown",(event)=>
{if(event.keyCode==13){
   buscarPrecio(talleres, precioBuscar.value)
}})
confirmarCompra.addEventListener("click", () => {
   seleccionTaller=[]
   localStorage.setItem("carrito", JSON.stringify(seleccionTaller))
   Swal.fire({
      icon: 'success',
      title: '¡Gracias por tu compra!',
      text: 'Te esperamos con muchas ganas para los encuentros de formacion ',
      showConfirmButton: false,
      timer: 4000
    })
  
})
selectOrden.addEventListener("change", () => { 
   switch(selectOrden.value){
      case "1":
         console.log
         ordenarMayorMenor(talleres)
         break
      case "2":
         ordenarMenorMayor(talleres)
         break
      case "3":
        ordenarABC(talleres)
        break
   default:
      mostrarCatalogoDOM(talleres)
      break;
   }
})
botonModal.addEventListener("click", () =>{
   cargarCarrito(seleccionTaller)})
