import { Component, Input } from "@angular/core";

@Component({
    selector: 'menu',
    templateUrl: './menu.html',
    styleUrls: ['./menu.scss']
})
export class Menu {
    @Input()
    items
}