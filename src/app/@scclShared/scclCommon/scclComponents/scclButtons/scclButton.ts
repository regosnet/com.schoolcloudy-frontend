import { Input, Output, EventEmitter } from '@angular/core';
import { IScclButton } from '../../../../scclModels/scclComponents';

export class ScclButton {
    @Input()
    scclBtns: IScclButton;

    @Output()
    btnActions = new EventEmitter();

    emitBtnActions(el) {
        this.btnActions.emit({element: el, button: this.scclBtns});
        this.switchButtonPairedIcon(el);
    }


    switchButtonPairedIcon(el) {
        const btnId = $(el).attr('id');
        /* filters to find the clicked button*/
        const clickedBtn = this.scclBtns.buttons.filter(x => x.id === btnId);
        const button = clickedBtn.shift();
        console.log(button);
        if (button.paired_icon) {
            /*switch  */
            button.icon = button.icon === button.icons.icon1.title
                ? button.icons.icon2.title : button.icons.icon1.title;

            button.id = button.id === button.icons.icon1.id ?
            button.icons.icon2.id : button.icons.icon1.id;
        }
    }
}
