import { Component, Input, AfterViewInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'sccl-form',
    templateUrl: './scclForm.html',
    styleUrls: ['./scclForm.scss']
})
export class ScclFormComponent implements AfterViewInit{
    
    @Input()
    formConfig 
    
    @Output()
    _submitForm = new EventEmitter();
    
    cardConfig;
    
    constructor(private cdRef: ChangeDetectorRef) {
	
}
    
    ngAfterViewInit(): void {
        this.cardConfig = this.getCardConfig()
        this.cdRef.detectChanges()
    }
    
    submitForm(userFormData, event) {
        this._submitForm.emit(userFormData);
    }
    
    getCardConfig() {
        return [
                {
                    chead: {
                        title: 'Login',
                        ddMenu: false,
                        show: false
                    }
                }
            ]
    }
}