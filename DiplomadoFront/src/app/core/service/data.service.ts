import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor() { }
    dataProduct = [
        { id: 0, des: "Closet", precio: 700500 },
        { id: 1, des: "Sofá", precio: 900500 },
        { id: 2, des: "Cama", precio: 1800500 },
        { id: 3, des: "Silla", precio: 78500 },
        { id: 4, des: "Relog", precio: 50500 },
        { id: 5, des: "Espejo", precio: 56500 },
        { id: 6, des: "Colchón", precio: 950500 },
    ]

    dataVentas = [
        { id: 0, vendedor: "Mateo", valorVenta: 68500 },
        { id: 1, vendedor: "Sebastian", valorVenta: 965300 },
        { id: 2, vendedor: "Diego", valorVenta: 759431 },
        { id: 3, vendedor: "Miguel", valorVenta: 1489000 },
        { id: 4, vendedor: "Camilo", valorVenta: 96500 },
        { id: 5, vendedor: "Edward", valorVenta: 684500 },
        { id: 6, vendedor: "Ricardo", valorVenta: 62000 },
        { id: 7, vendedor: "Mateo", valorVenta: 78500 },
        { id: 8, vendedor: "Sebastian", valorVenta: 963500 },
        { id: 9, vendedor: "Diego", valorVenta: 74500 },
        { id: 10, vendedor: "Miguel", valorVenta: 93500 },
        { id: 11, vendedor: "Camilo", valorVenta: 74900 },
        { id: 12, vendedor: "Edward", valorVenta: 8500 },
        { id: 13, vendedor: "Ricardo", valorVenta: 4500 },
        { id: 14, vendedor: "Mateo", valorVenta: 6000 },
        { id: 15, vendedor: "Sebastian", valorVenta: 78500 },
        { id: 16, vendedor: "Diego", valorVenta: 48500 },
        { id: 17, vendedor: "Miguel", valorVenta: 80000 },
        { id: 18, vendedor: "Camilo", valorVenta: 10000 },
        { id: 19, vendedor: "Edward", valorVenta: 100000 },
        { id: 20, vendedor: "Ricardo", valorVenta: 11000 },
    ]

    getAllProductos() {
        return this.dataProduct;
    }
    getAllVentas() {
        return this.dataProduct;
    }
}
