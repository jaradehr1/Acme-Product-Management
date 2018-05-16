import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  // we don't need the selector because it is not going to be nested
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  // ActivatedRoute helps us access the route paramas
  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) { }

  ngOnInit() {
    // getting the id from the route and store it in a local variable
    // we used the snapshot approach because we don't expect the url to change

    // we added the plus to convert the returned string from the snapshot to a numeric and then store it in a local variable
    // Note that the 'id' must match the parameter passed in the routes '/products/:id'
    let id = +this._route.snapshot.paramMap.get('id');
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  // Routing with code
  onBack(): void{
    this._router.navigate(['/products']);
  }
}
