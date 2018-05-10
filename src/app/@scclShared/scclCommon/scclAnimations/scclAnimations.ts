declare var $:any;
import { trigger, state, transition, style, animate, query, stagger, keyframes, animation, useAnimation } from '@angular/animations';

export let anim = animation([style({

})])

export let fade = trigger('fade', [
    state('void', style({
        backgroundColor: 'red',
        opacity: 0
    })),
    transition(':enter, :leave', [
        animate(2000)
    ])
]);

export let resizeSidePanel = [
    trigger('left-padding', [
  
        state('notCollapsed', style({
            paddingLeft: 255 + 'px'
        })),
        state('collapsed', style({
            paddingLeft: 75 + 'px'
        })),
        transition('notCollapsed => collapsed', [animate('180ms')]),
        transition('collapsed => notCollapsed', [animate('180ms')])
    ]),
    trigger('right-padding', [

        state('notCollapsed', style({
            paddingRight: 255 + 'px'
        })),
        state('collapsed', style({
            paddingRight: 75 + 'px'
        })),
        transition('notCollapsed => collapsed', [animate('180ms')]),
        transition('collapsed => notCollapsed', [animate('120ms')])
    ]),

    trigger('sidebar-resize', [
        state('notCollapsed', style({
            width: 250 + 'px',
        })),
        state('collapsed', style({
            width: 70 + 'px',
        })),
        transition('notCollapsed => collapsed', [animate('180ms')]),
        transition('collapsed => notCollapsed', [animate('180ms')]),
    ])
]
export let resizebodyLeft = trigger('body-resize', [
  
    state('notCollapsed', style({
        paddingLeft: 255 + 'px'
    })),
    state('collapsed', style({
        paddingLeft: 75 + 'px'
    })),
    transition('notCollapsed => collapsed', [animate('180ms')]),
    transition('collapsed => notCollapsed', [animate('120ms')])
]);

export let resizebodyRight = trigger('body-resize', [
  
    state('notCollapsed', style({
        paddingRight: 255 + 'px'
    })),
    state('collapsed', style({
        paddingRight: 75 + 'px'
    })),
    transition('notCollapsed => collapsed', [animate('180ms')]),
    transition('collapsed => notCollapsed', [animate('120ms')]),
    transition('collapsed => notCollapsed', [useAnimation(anim)])
]);


export const staggering = trigger('listAnimation', [
    transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({opacity: 0, transform: 'translateY(-75)', offset: 0}),
                style({opacity: 0.5, transform: 'translateY(35)', offset: 0.3}),
                style({opacity: 1, transform: 'translateY(0)', offset: 1}),
            ]))
        ]), {optional: true})
    ])
]);


/* state('void', style({
        width: 70 + 'px',
        backgroundColor: 'red'
    })),
    
    state('notCollapsed', style({
        width: 250 + 'px',
        backgroundColor: 'red'
    })),
    state('collapsed', style({
        width: 70 + 'px',
    })),
    transition('void => collapsed', [animate('180ms')]),
    transition('notCollapsed => collapsed', [animate('180ms')]),
    transition('collapsed => notCollapsed', [animate('120ms')]),




    animations: [
        trigger('resize-left-sidebar', [
            state('collapsed', style({
                width: 70 + 'px',
            })),
            transition('notCollapsed => collapsed', [
                query('#left-side-panel', [
                    animate(1000, style({
                        width: 70 + 'px',
                        backgroundColor: 'red'
                    }))
                  ])
            ]),
            transition('collapsed => notCollapsed', [
                query('#left-side-panel', [
                    animate(1000, style({
                        width: 250 + 'px',
                        backgroundColor: 'red'
                    }))
                  ])
            ])
        ])
    ]
})




animations: [
        trigger('resize-sidebar', [
            transition('notCollapsed => collapsed', [
                query('#left-side-panel', [
                    animate(1000, style({
                        width: 70 + 'px',
                        backgroundColor: 'red'
                    }))
                  ])
            ]),
            transition('collapsed => notCollapsed', [
                query('#left-side-panel', [
                    animate(1000, style({
                        width: 250 + 'px',
                        backgroundColor: 'red'
                    }))
                  ])
            ])
        ]),
        trigger('left-sidebar', [

        ]),
        trigger('right-sidebar', [

        ])
    ]

*/
