import { Injectable } from "@angular/core";

@Injectable()
export abstract class ScclScrollbarSerivce {
    abstract initializePanelScrollbar(element): void;
}