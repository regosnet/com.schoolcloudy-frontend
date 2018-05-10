import { PipeTransform, Pipe } from "@angular/core";
import { IScclTab, IScclTabHeader } from "../../../../scclModels/scclComponents";
import { ScclGlobalService } from "../../scclServices";

@Pipe({name: 'scclTabFilter'})
export class ScclTabFilter implements PipeTransform {
    param = 'non-valid-user';
    gridWidth = 12;
    constructor(private scclGlobalService: ScclGlobalService) {}

    transform(input: IScclTab) {
        console.log(input);
        this.scclGlobalService.subscribe('isLoggedIn', (isLoggedIn) => {
            if (!isLoggedIn) {
                input.tabBody = this.filterTabElements(input.tabBody, this.param);
                input.tabHeader = this.filterTabElements(input.tabHeader, this.param);
                this.setTabWidth(input.tabHeader);
            }
            console.log(input.tabHeader)
        })
        
        if(input !== undefined) {
            this.setTabWidth(input.tabHeader);
        }
        return input;
    }

    filterTabElements(tabElement: any[], param: string): any[] {
        return tabElement.filter(tab => tab.active === param);
    }

    setTabWidth(tabElement: IScclTabHeader[]){
        console.log(tabElement.length);
        tabElement.map(tab => tab.class += ' s' + this.gridWidth/tabElement.length);
    }
}