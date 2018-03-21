import { Component, Input} from '@angular/core';

@Component({
  selector: 'sccl-user-greeting-bar',
  templateUrl: './scclUserGreetingBar.html',
  styleUrls: ['./scclUserGreetingBar.scss']
})
export class ScclUserGreetingBarComponent {
    @Input()
    isLoggedIn
}