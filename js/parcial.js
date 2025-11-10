'use strict';

/*
 *	Tito, Valentín
 */

const $ = document;

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

const contenedorProductos = $.querySelector('#productos');

Productos.forEach((producto => {
	const productoDiv = $.createElement('div');

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
	agregarBtn.textContent = 'Agregar';
	infoDiv.appendChild(agregarBtn);

	const ampliarBtn = $.createElement('button');
	ampliarBtn.textContent = 'Ampliar';
	infoDiv.appendChild(ampliarBtn);

	productoDiv.appendChild(infoDiv);
	contenedorProductos.appendChild(productoDiv);
}))