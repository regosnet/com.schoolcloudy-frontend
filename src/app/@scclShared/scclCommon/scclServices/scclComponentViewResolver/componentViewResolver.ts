import {
        Injectable,
        ComponentFactoryResolver,
        Injector,
        ApplicationRef
    } from '@angular/core';
import { ScclComponentViewResolverService } from '.';

declare var $: any;

@Injectable()
export class ScclComponentViewResolver implements ScclComponentViewResolverService {

    constructor(
        private resolver: ComponentFactoryResolver,
        private injector: Injector,
        private app: ApplicationRef
    ) {

    }
    componentViewResolver(element, component) {
        const newDivId = 'sub-element ' + $(element).attr('id');
       const div = document.createElement('div');
       div.id = newDivId;
       div.setAttribute('class', 'body-tab');
       element.appendChild(div);
       setTimeout(() => {
           const factory = this.resolver.resolveComponentFactory(component);
           const ref = factory.create(this.injector, [], div);
           this.app.attachView(ref.hostView);
       }, 2);
    }
}
