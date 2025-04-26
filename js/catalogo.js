document.querySelectorAll('.product-card').forEach(item => {
    const button = item.querySelector('.buy-now');
    const title = item.querySelector('.catalogo__title').textContent.trim();
    const precio = item.querySelector('.price').textContent.trim();
    const whatsappNumber = "573214621895";

    button.href = `https://wa.me/${whatsappNumber}?text=Estoy%20interesado%20en%20el%20vehículo:%20${encodeURIComponent(title)}, Precio%20sugerido:%20${encodeURIComponent(precio)}*`;
    button.target = "_blank"; 
});

