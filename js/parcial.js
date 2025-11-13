'use strict';

/*
 *	Tito, Valentín
 */

const $ = document;
const contenedorProductos = $.querySelector('#productos');
const ContenidoItemsAgregados = $.querySelector('#ItemsAgregados');
const ContenidoValorTotal = $.querySelector('#ValorTotal');

ContenidoItemsAgregados.textContent = '0';
ContenidoValorTotal.textContent = '0';

let ValorTotal = 0;
let ItemsAgregados = [];
let Productos = [
	{
		nombre: 'Banana',
		imagen: 'banana.jpg',
		descripcion: 'Plátano fresco y delicioso',
		precio: 100,
	},
	{
		nombre: 'Frutilla',
		imagen: 'frutilla.jpg',
		descripcion: 'Frutillas rojas y jugosas',
		precio: 150,
	},
	{
		nombre: 'Limon',
		imagen: 'limon.jpg',
		descripcion: 'Limon amarillo y ácido',
		precio: 150,
	},
	{
		nombre: 'Manzana Roja',
		imagen: 'manzana-roja.jpg',
		descripcion: 'Manzana roja crujiente',
		precio: 120,
	},
	{
		nombre: 'Naranja',
		imagen: 'naranja.jpg',
		descripcion: 'Naranja fresca y jugosa',
		precio: 110,
	},
	{
		nombre: 'Piña',
		imagen: 'piña.jpg',
		descripcion: 'Piña tropical dulce',
		precio: 180,
	},
];

// Generar el contenido de los productos dinámicamente
Productos.forEach((producto => {
	const productoDiv = $.createElement('div');
	productoDiv.id = producto.nombre.toLowerCase().replace(' ', '-');

	const img = $.createElement('img');
	img.src = `img/fruta/${producto.imagen}`;
	img.alt = producto.nombre;
	productoDiv.appendChild(img);

	const infoDiv = $.createElement('div');

	const nombreH3 = $.createElement('h3');
	nombreH3.textContent = producto.nombre;
	infoDiv.appendChild(nombreH3);

	const precioP = $.createElement('p');
	precioP.innerHTML = `Precio: <span>$${producto.precio}</span>`;
	infoDiv.appendChild(precioP);

	const agregarBtn = $.createElement('button');
	agregarBtn.classList.add('agregar');
	agregarBtn.textContent = 'Agregar';
	infoDiv.appendChild(agregarBtn);

	const ampliarBtn = $.createElement('button');
	ampliarBtn.classList.add('ampliar');
	ampliarBtn.textContent = 'Ampliar';
	infoDiv.appendChild(ampliarBtn);

	productoDiv.appendChild(infoDiv);
	contenedorProductos.appendChild(productoDiv);
}))

const botonesAgregar = $.querySelectorAll('.agregar');

// Agregar funcionalidad a los botones de agregar, actualizando el valor de los items y el total
botonesAgregar.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		const productoDiv = e.target.parentElement.parentElement;
		const nombreProducto = productoDiv.querySelector('h3').textContent;
		const producto = Productos.find((p) => p.nombre === nombreProducto);

		ItemsAgregados.push(producto);
		ValorTotal += producto.precio;

		ContenidoItemsAgregados.textContent = ItemsAgregados.length;
		ContenidoValorTotal.textContent = ValorTotal;

		// Actualizar el título del modal del carrito dinámicamente
		modalCarrito.title = `Total a pagar: $${ValorTotal}`;
	});
});

// ----------------------------------------

// Crear el contenedor del modal con su contenido inicial
const modalContainerProducto = $.getElementById('modal-producto');
// Crear el contenido del modal
const modalContenidoProducto = $.createElement('div');
modalContenidoProducto.id = 'modal-contenido';

// Crear y agregar el contenido de carga inicial
let modalContenidoCargando = $.createElement('p');
modalContenidoCargando.textContent = 'Cargando...';

modalContenidoProducto.appendChild(modalContenidoCargando);
modalContainerProducto.appendChild(modalContenidoProducto);

// Crear el modal con LemonadeJS
let modalProducto = Modal(modalContainerProducto, {
	width: 500,
	title: 'Detalle del Producto',
	top: 30,
	closed: true,
	closable: true,
	draggable: false,
	backdrop: true
});

// Agregar funcionalidad a los botones de ampliar
const botonesAmpliar = $.querySelectorAll('.ampliar');

botonesAmpliar.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		const productoDiv = e.target.parentElement.parentElement;
		const nombreProducto = productoDiv.querySelector('h3').textContent;
		const producto = Productos.find((p) => p.nombre === nombreProducto);

		// Limpiar el contenido anterior del modal
		modalContenidoProducto.innerHTML = '';

		// Crear y agregar la imagen del producto
		const img = $.createElement('img');
		img.src = `img/fruta/${producto.imagen}`;
		img.alt = producto.nombre;
		modalContenidoProducto.appendChild(img);

		// Crear y agregar el título del producto
		const titulo = $.createElement('h3');
		titulo.textContent = producto.nombre;
		modalContenidoProducto.appendChild(titulo);

		// Crear y agregar la descripción del producto
		const descripcionDiv = $.createElement('div');
		descripcionDiv.classList.add('modal-descripcion');

		const descripcionText = $.createElement('p');
		descripcionText.classList.add('modal-text');
		descripcionText.textContent = producto.descripcion;
		descripcionDiv.appendChild(descripcionText);

		// Crear y agregar el precio del producto
		const precioText = $.createElement('p');
		precioText.classList.add('modal-precio');
		precioText.textContent = `Precio: $${producto.precio}`;
		descripcionDiv.appendChild(precioText);

		modalContenidoProducto.appendChild(descripcionDiv);

		// Abrir el modal
		modalProducto.closed = false;
	});
});

// ----------------------------------------

// Crear el contenedor del modal con su contenido inicial
const modalContainercarrito = $.getElementById('modal-carrito');
// Crear el contenido del modal
const modalContenidoCarrito = $.createElement('div');
modalContenidoCarrito.id = 'modal-contenido';

// Crear y agregar el contenido de carga inicial
let modalContenidoCargandoCarrito = $.createElement('p');
modalContenidoCargandoCarrito.textContent = 'Cargando...';

modalContenidoCarrito.appendChild(modalContenidoCargandoCarrito);
modalContainercarrito.appendChild(modalContenidoCarrito);

// Crear el modal con LemonadeJS
let modalCarrito = Modal(modalContainercarrito, {
	width: 500,
	title: "Carrito de Compras",
	top: 30,
	closed: true,
	closable: true,
	draggable: true,
	minimizable: true
});

// Agregar funcionalidad al botón de ver carrito
const botonVerCarrito = $.getElementById('button');

botonVerCarrito.addEventListener('click', () => {
	// Limpiar el contenido anterior del modal
	modalContenidoCarrito.innerHTML = '';

	// Actualizar el título del modal del carrito dinámicamente
	modalCarrito.title = `Total a pagar: $${ValorTotal}`;

	if (ItemsAgregados.length === 0) {
		const mensajeVacio = $.createElement('p');
		mensajeVacio.textContent = 'El carrito está vacío.';
		modalContenidoCarrito.appendChild(mensajeVacio);
	} else {
		ItemsAgregados.forEach((producto) => {
			const productoDiv = $.createElement('div');
			productoDiv.classList.add('modal-producto-item');

			const nombreP = $.createElement('p');
			nombreP.textContent = producto.nombre;
			productoDiv.appendChild(nombreP);

			const precioP = $.createElement('p');
			precioP.textContent = `$${producto.precio}`;
			productoDiv.appendChild(precioP);

			modalContenidoCarrito.appendChild(productoDiv);
		});

		const totalDiv = $.createElement('div');
		totalDiv.classList.add('modal-total');

		const totalLabel = $.createElement('p');
		totalLabel.textContent = 'Total:';
		totalDiv.appendChild(totalLabel);

		const totalValue = $.createElement('p');
		totalValue.textContent = `$${ValorTotal}`;
		totalDiv.appendChild(totalValue);

		modalContenidoCarrito.appendChild(totalDiv);
	}

	// Abrir el modal
	modalCarrito.closed = false;
});