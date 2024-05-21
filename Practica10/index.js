let listaProductos = document.querySelector('#listaProductos');



// obtiene productos


function obtenerProductos(){
// promesa

fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(productosObtenidos => {
            console.log("productosObtenidos", productosObtenidos)

            productosObtenidos.forEach((producto, indice ) => {
                console.log("producto" + producto);
                
                listaProductos.innerHTML +=`

                <div class="col-12 col-md-3">
                    <div class="card">
                    <img src="${producto.image}" class="imagenProducto" class="card-img-top py-2" alt="${producto.title}">
                        <div class="card-body">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.description.slice(0,100)}</p>
                            <a href="#" class="btn btn-primary">${producto.price}</a>
                        </div>
                    </div>
                </div>
                `
                
                ;
            });
        });
}

obtenerProductos();