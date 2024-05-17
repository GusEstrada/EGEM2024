let formulario = document.getElementById('formulario');
let formularioEditar = document.getElementById('formularioEditar');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let descripcion = document.getElementById('descripcion');
let imagen = document.getElementById('imagen');
let video = document.getElementById('video');
let idTarea = document.getElementById('idTarea');
let audio = document.getElementById('audio');

let tareas = [
    {
        nombre: "Kyrie Irving",
        fecha: "2024-05-17",
        descripcion: "Kyrie es uno de mis jugadores actuales favoritos ya que verlo siempre es un show y es extremadamente creativo",
        imagen: "Kyrie.jpeg",
        video: "Kyrie.mp4",
        audio: "Nba.mp3"
    },
    {
        nombre: "Kobe Bryant",
        fecha: "2024-05-17",
        descripcion: "Kobe siempre fue y sera mi idolo en el deporte del baloncesto, su mentalidad y su forma de jugar siempre me inspiraron a ser mejor en todo lo que hago",
        imagen: "Kobe_bryant.jpeg",
        video: "Kobe_bryant.mp4",
        audio: "Nba.mp3"
    },
    {
        nombre: "Magic Johnson",
        fecha: "2024-05-17",
        descripcion: "Magic es uno de los jugadores mas creativos que he visto en mi vida, ademas de ser un lider nato y un gran jugador de baloncesto",
        imagen: "Maig.jpg",
        video: "Magic_Johnson.mp4",
        audio: "Nba.mp3"
    }
    
];


let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById('btnGuardar');
let btnGuardarEditar = document.getElementById('btnGuardarEditar');

function mostrarTareas() {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col nombre-col border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col fecha-col border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-3 border p-2'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-2 border p-2'>
                ${tarea.imagen ? `<img src="${tarea.imagen}" alt="Imagen" style="width: 100%;">` : ""}
            </div>
            <div class='col-2 border p-2'>
                ${tarea.video ? `<video src="${tarea.video}" controls style="width: 100%;"></video>` : ""}
            </div>
            <div class='col-2 border p-2'>
            ${tarea.audio ? `<audio controls><source src="${tarea.audio}><</audio>` : ""}
        </div>
            <div class='col-1 border p-2 text-center'>
                <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick="editarTarea(${indice})">Editar</button>
            </div>
            <div class='col-1 border p-2 text-center'>
                <button class='btn btn-danger' onClick="borrarTarea(${indice})">Borrar</button>
            </div>
        </div>
        `;
    });
}

mostrarTareas();


let editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    idTarea.value = indice;
};

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    mostrarTareas();
    cerrarModalEditar();
});

let agregarDatos = () => {
    let imgSrc = imagen.files[0] ? URL.createObjectURL(imagen.files[0]) : "";
    let videoSrc = video.files[0] ? URL.createObjectURL(video.files[0]) : "";
    let audioSrc = audio.files[0] ? URL.createObjectURL(audio.files[0]) : "";
   


    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        imagen: imgSrc,
        video: videoSrc,
        audio: audioSrc,
      
    };
    tareas.push(datos);
    mostrarTareas();
};

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
};

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
};

let borrarTarea = (indice) => {
    tareas.splice(indice, 1);
    console.log(tareas);
    mostrarTareas();
};

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    agregarDatos();
    cerrarModal();
    formulario.reset();
});