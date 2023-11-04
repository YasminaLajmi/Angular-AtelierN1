import { Component, ViewChild } from '@angular/core';
import { Product } from 'src/app/core/product';

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent {
product:Product=new Product();



}
