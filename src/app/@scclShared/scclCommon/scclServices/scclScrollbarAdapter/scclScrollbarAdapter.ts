import { ScclScrollbarAdapterSerivce } from "./scclScrollbarAdapter.service";
import {
    MalihuScrollbarService
} from 'ngx-malihu-scrollbar';
declare var $: any;
import { scclContants } from "../../scclContants/sccl.constants";
import { Injectable } from "@angular/core";

@Injectable()
export class ScclScrollbarAdapter implements ScclScrollbarAdapterSerivce {

    constructor(private mScrollbarService: MalihuScrollbarService) {}

    initializePanelScrollbar(element) {
        if (window.innerWidth > 600) {
            this.mScrollbarService.destroy(element);
            this.mScrollbarService.initScrollbar(element, scclContants.slimScrollObject);
            const toolbox = $(element);
            const height = toolbox.height();
            const scrollHeight = toolbox.get(0).scrollHeight;
            toolbox.off('mousewheel').on('mousewheel', function (event) {
                const blockScrolling =
                this.scrollTop === scrollHeight - height ||
                this.scrollTop === 0;
                    return !blockScrolling;
                  });
            }else {
            $(element).css({
                'overflowY': 'scroll',
                'overflowX': 'none'
            });
        }
    }
}