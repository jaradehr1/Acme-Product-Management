import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    // parent to nested data - on change event needs input decorator to pass arguments
    @Input() rating: number;
    starWidth: number;
    // nested to parent data is only through an event
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick():void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
}