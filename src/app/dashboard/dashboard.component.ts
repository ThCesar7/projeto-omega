import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isMenuHidden!: boolean

  constructor() {}

  evento(){
    this.isMenuHidden = !this.isMenuHidden;
  }
}
