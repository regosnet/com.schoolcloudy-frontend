import { Injectable, AfterViewInit } from '@angular/core';
import { ScclGlobalService } from "../../scclCommon/scclServices";

@Injectable()
export class ScclSettingService {
    
   constructor(private scclGlobalService: ScclGlobalService) {
       this.scclGlobalService.subscribe('home', (bodyConfigs) => {
           console.log('settings works')
       })
   }
}