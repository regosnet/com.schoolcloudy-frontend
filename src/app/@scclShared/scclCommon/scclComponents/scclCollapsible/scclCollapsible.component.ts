import { Component,
         Input, ViewContainerRef,
         ViewChild, AfterViewInit,
         ComponentFactoryResolver,
         ComponentFactory, ComponentRef,
         QueryList, ViewChildren
} from '@angular/core';
import { ScclLoginComponent } from '../../../scclPanels/scclLogin/scclLogin.component';
declare var $: any;

@Component({
    selector: 'sccl-collapsible',
    templateUrl: './scclCollapsible.html',
    styleUrls: ['./scclCollapsible.scss']
})
export class ScclCollapsibleComponent implements AfterViewInit {
    @Input()
    public items: Array<Object>;
    public componentRef;

    @ViewChild('login', { read: ViewContainerRef }) loginContainer;
    constructor(private resolver: ComponentFactoryResolver) {}

    ngAfterViewInit(): void {
        // this.createComponent()
    }

    public createComponent() {
        this.items.forEach((item) => {
            this.loginContainer.clear();
            const factory = this.resolver.resolveComponentFactory(item['component']);
            this.componentRef = this.loginContainer.createComponent(factory);
        });
    }
}
