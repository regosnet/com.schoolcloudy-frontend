import { Injectable } from "@angular/core";
import {IScclButton } from "../../../../scclModels/scclComponents";

@Injectable()
export abstract class ScclPanelTogglerService {
    abstract toggleSlideOnAxisX(): void;
    abstract toggleSlideOnAxisY(): void;
    abstract toggleAlongAxisX(elment, state): void;
    abstract toggleAlongAxisY(element, state): void;
}
