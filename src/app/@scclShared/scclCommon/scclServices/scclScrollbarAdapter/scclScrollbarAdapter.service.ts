import { Injectable } from "@angular/core";

@Injectable()
export abstract class ScclScrollbarAdapterSerivce {
    abstract initializePanelScrollbar(element): void;
}