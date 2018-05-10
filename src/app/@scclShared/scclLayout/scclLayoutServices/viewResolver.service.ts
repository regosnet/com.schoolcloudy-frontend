import {
        Injectable,
        ComponentFactoryResolver,
        Injector,
        ApplicationRef
    } from '@angular/core';
import {
        MalihuScrollbarService
    } from 'ngx-malihu-scrollbar';
import { scclContants } from '../../scclCommon/scclContants/sccl.constants';
declare var $: any;

@Injectable()
export class ScclViewResolverService {

    constructor(
        private resolver: ComponentFactoryResolver,
        private injector: Injector,
        private app: ApplicationRef,
        private mScrollbarService: MalihuScrollbarService
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

     initScrollbar(el) {
        if (window.innerWidth > 600) {
            this.mScrollbarService.destroy(el);
            this.mScrollbarService.initScrollbar(el, scclContants.slimScrollObject);
            const toolbox = $(el);
            const height = toolbox.height();
            const scrollHeight = toolbox.get(0).scrollHeight;
            toolbox.off('mousewheel').on('mousewheel', function (event) {
                const blockScrolling =
                this.scrollTop === scrollHeight - height && event.deltaY < 0 ||
                this.scrollTop === 0 && event.deltaY > 0;
                    return !blockScrolling;
                  });
            }else {
            $(el).css({
                'overflowY': 'scroll',
                'overflowX': 'none'
            });
            }
    }
}
