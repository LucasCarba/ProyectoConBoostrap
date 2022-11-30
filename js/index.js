

const addCarrito = document.querySelectorAll('.btn');
addCarrito.forEach(botones => {
    botones.addEventListener('click', addToCartClicked);
});

const col = document.querySelector('.tbody');

function addToCartClicked(event){
    const button = event.target
    const item = button.closest('.card');

    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    agregarProducto(itemTitle,itemImg,itemPrice);
}

function agregarProducto(itemTitle, itemImg, itemPrice){
    const fila = document.createElement('tr');
    const contenido = `
    
    `;
    fila.innerHTML = contenido;
    col.append(fila);
    

}