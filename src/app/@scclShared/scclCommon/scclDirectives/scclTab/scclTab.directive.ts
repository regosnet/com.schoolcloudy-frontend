import { 
    Directive,HostBinding,
    ComponentFactoryResolver,
    Injector, ApplicationRef,
    HostListener,Input,AfterViewInit } from '@angular/core';
import { IScclTabComponent, IScclTabBody } from "../../../../scclModels";
import {
    MalihuScrollbarService
} from 'ngx-malihu-scrollbar';
import { ScclTabService } from "../../scclComponents/scclTab/scclTab.service";
import { ScclGlobalService } from "../../scclServices/index";
import {  scclContants } from "../../scclContants/sccl.constants";

declare var $: any;

    
@Directive({
  selector: '[tab-body], [tab-head]',
})
export class ScclTabDirective implements AfterViewInit {
  
    @Input('tab-head')
    tabHead: HTMLAnchorElement;
    isScrolled = false;

    @Input('tab-body')
    tabBody: HTMLDivElement;

    initActive: Array<any>;
    tabBodyElements: Array<IScclTabBody>;
    tabComponents: Array<IScclTabComponent> 

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef,
    private tabService: ScclTabService,
    private scclGlobalService: ScclGlobalService,
    private mScrollbarService: MalihuScrollbarService) {
        
   }
    
   @HostListener('click', ['$event'])
   getComponent(event: MouseEvent) {
    const tabHeadHref = $(event.currentTarget).attr('href');
     this.tabBodyElements = this.getTabBodySiblings(event.currentTarget);
      this.tabBodyElements.forEach((el) => {
        if('#'+$(el).attr('id') === tabHeadHref) {
            this.tabService.getTabComponentByRef($(el).attr('id')).forEach((c) => {
                if(c !== undefined) {
                    this.loadComponent(el, c.component)
                }
            })
        }
      })
   }
 
  @HostBinding("attr.th") get getTabHead() {
    return this.tabHead;
  }

  @HostBinding("attr.tb") get getTabBody() {
    return this.tabBody;
  }

  ngAfterViewInit() {
    this.initializeFirstTabOnload();
  }
  ngOnInit() {
  }
  
  public loadComponent(el, component) {
     const newDivId = 'sub-tab' + $(el).attr('id');
    const div = document.createElement('div');
    $('#'+newDivId).remove();
    div.id = newDivId;
    div.setAttribute('class', 'body-tab'); 
    el.appendChild(div)
    setTimeout(() => {
        const factory = this.resolver.resolveComponentFactory(component);
        const ref = factory.create(this.injector, [], div);
        this.app.attachView(ref.hostView);
    }, 1);
    if(window.innerWidth > 600){
            this.mScrollbarService.destroy(el); 
            this.mScrollbarService.initScrollbar(el, scclContants.slimScrollObject);
     }else {
      $(el).css({
          'overflowY': 'scroll',
          'overflowX': 'none'
        })
    }
  }

  /* this function uses the anchor element from the head
    tab to trive through parents and get the silblings of
    the first div parent*/
  public getTabBodySiblings(el) {
    return $(el).parent()
                .closest('div')
                .siblings()
                .toArray()
  }
  
  public initializeFirstTabOnload() {
      if($(this.getTabBody).hasClass("tab-1")) {
          this.tabService.getTabComponentByRef($(this.getTabBody).attr('id')).forEach((c) => {
              if(c !== undefined) {
                  this.loadComponent(this.getTabBody, c.component)
              }
          })
      }
  }
}

