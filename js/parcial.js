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

botonesAgregar.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		const productoDiv = e.target.parentElement.parentElement;
		const nombreProducto = productoDiv.querySelector('h3').textContent;
		const producto = Productos.find((p) => p.nombre === nombreProducto);

		ItemsAgregados.push(producto);
		ValorTotal += producto.precio;

		ContenidoItemsAgregados.textContent = ItemsAgregados.length;
		ContenidoValorTotal.textContent = ValorTotal;
	});
});

const modal = Modal(document.getElementById("root"), {
	width: 400,
	height: 200,
	title: "My window modal",
	closed: true,
	closable: true,
	draggable: true,
	position: 'center',
});
button.addEventListener('click', () => {
	modal.closed = !modal.closed;
});