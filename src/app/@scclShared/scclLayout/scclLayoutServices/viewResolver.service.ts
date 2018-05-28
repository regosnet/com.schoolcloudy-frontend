import {
        Injectable,
        ComponentFactoryResolver,
        Injector,
        ApplicationRef
    } from '@angular/core';

import { scclContants } from '../../scclCommon/scclContants/sccl.constants';
declare var $: any;

@Injectable()
export class ScclViewResolverService {

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
