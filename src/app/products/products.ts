export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

/*
    In general, we only create a business object class if that class
    provides some functionality that we want to use throughout our app
    such as the method "calculatedDiscount"
*/
export class Product implements IProduct {

    constructor(
        public productId: number,
        public productName: string,
        public productCode: string,
        public releaseDate: string,
        public price: number,
        public description: string,
        public starRating: number,
        public imageUrl: string 
    ){}

    caluculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }
}