import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private productHttp: ProductHttpService) {}

  ngOnInit(): void {
    //this.updateProduct();
    //this.createProduct();
    this.deleteProduct();
  }
  getProducts() {
    const response = this.httpClient
      .get('https://api.escuelajs.co/api/v1/products')
      .subscribe((response) => {
        console.log(response);
      });
  }
  getProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products';
    const response = this.httpClient.get(url).subscribe((response) => {
      console.log(response);
    });
  }
  createProduct() {
    const data = {
      title: 'Computadora Itel core i7',
      price: 650,
      description: 'Electrodomesticos / Erick Guevara',
      images: [
        'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
      ],
      categoryId: 1,
    };
    const url = 'https://api.escuelajs.co/api/v1/products';
    const response = this.httpClient.post(url, data).subscribe((response) => {
      console.log(response);
    });
  }
  updateProduct() {
    const data = {
      title: 'Computadora Itel core i10',
      price: 1150,
      description: 'Electrodomesticos / Erick Guevara',
    };
    const url = 'https://api.escuelajs.co/api/v1/products/279';
    this.httpClient.put(url, data).subscribe((response) => {
      console.log(response);
    });
  }
  deleteProduct() {
    const url = 'https://api.escuelajs.co/api/v1/products/260';
    this.httpClient.delete(url).subscribe((response) => {
      console.log(response);
    });
  }
}
