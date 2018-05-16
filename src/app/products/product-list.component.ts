import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";
import { ProductService } from "./product.service";

/*
    Component Lifecycle
    Create -> Render -> Create and Render Children -> Process Changes -> Destroy

    Component Lifecycle Hooks
    - OnInit: perform component initialization, retrieve data
    - OnChanges: Perform action after changes to input properties 
    - OnDestroy: perform cleanup before Angular destroys the component
*/

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
   
})

// By default, the component implements OnInit method, however, it is a good practice to hard type it.
export class ProductListComponent implements OnInit {
    title: string = 'Product List';
    imageWidth: number = 40;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    // set accessor cannot have a returned type
    set listFilter(value: string) {
        this._listFilter = value;
        /*
            test ? expression1 : expression2  
            expression1 is an expression retruned if test = TRUE
            expression2 is an expression retruned if test = FALSE

            The final result is assigned to the property filteredProducts
        */
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[];

    // we use the constructor parameter to define the dependency (ProductService)
    // what's in the constructor will be executed before the ngOnInit() event, that's why we moved the filteredProducts to this event after the service gets injected in the component
    constructor(private _productService: ProductService) {
        // this._listFilter = 'cart';
    }

    // This methode will get invoked when the user clicks on the stars
    onRatingClicked(message: string): void {
        this.title = 'Product List: ' + message; 
    }

    performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        // this.products = this._productService.getProduct();

        // the class has to subscribe to the observable and waits for data or a notification
        this._productService.getProducts()
                .subscribe(products => {
                    // response gets assigned to the list of products, then we set the filter
                    this.products = products;
                    this.filteredProducts = this.products;
                },
                    error => this.errorMessage = <any>error);
    }

}