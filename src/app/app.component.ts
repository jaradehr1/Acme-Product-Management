import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

// Componenet Decorator and because we used this decorator, we need to tell Angular where to find it by importing component at the top
// 'pm-root' is a directive name used in HTML, and it could be anything pm is for product managment

// we have to register the service in the targeted component "ProductService"
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Acme Product Management';
}
