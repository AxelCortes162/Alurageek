// GET
const listaProductosP = () =>{
    return fetch("https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/playeras")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

const listaProductosL = () =>{
    return fetch("https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/laptops")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}
const listaProductosN = () =>{
    return fetch("https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/nfts")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

const perfiles = () =>{
    return fetch("https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/perfil")
    .then((respuesta) => respuesta.json())
    .catch(error => console.log(error))
}

//POST

const crearProductoP = (imagenURL, nombre, price, descripcion) => {
    return fetch("https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/playeras", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagenURL, nombre, price, descripcion, id: uuid.v4()})
    })

}


const crearProductoL = (imagenURL, nombre, price, descripcion) => {
    return fetch("https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/laptops", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({imagenURL, nombre, price, descripcion, id: uuid.v4()})
    })
}


const crearProductoN = (imagenURL, nombre, price, descripcion) => {
    return fetch("  https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/nfts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagenURL,
            price,
            nombre,
            descripcion,
            id: uuid.v4()
        })
    });
}

const detalleProductoP = (id) =>{
    return fetch (`https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/playeras/${id}`).then((respuesta) => respuesta.json());
}

const detalleProductoL = (id) =>{
    return fetch (`https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/laptops/${id}`).then((respuesta) => respuesta.json());
}

const detalleProductoN = (id) =>{
    return fetch (`https://alurageek-lwdhj3pwx-axelcortes162.vercel.app/nfts/${id}`).then((respuesta) => respuesta.json());
}

export const productoServicios = {
    listaProductosP,
    listaProductosL,
    listaProductosN,
    crearProductoP,
    crearProductoL,
    crearProductoN,
    detalleProductoP,
    detalleProductoL,
    detalleProductoN, 
    perfiles
};