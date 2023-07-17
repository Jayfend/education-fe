import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showOption:boolean = false;
  headerImg:any="./assets/Imgs/Frame 8.png"
  public toggleOption(){
    this.showOption = this.showOption === true ? false : true;
 }
}
