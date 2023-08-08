import { Component, OnInit } from '@angular/core';
import { fadeOutRightAnimation } from 'angular-animations';
import { ToastService } from '../services/toast/toast.service';
import * as moment from 'moment';

@Component({
  selector: 'app-toast-notify',
  templateUrl: './toast-notify.component.html',
  styleUrls: ['./toast-notify.component.css'],
  animations:[
    fadeOutRightAnimation(),
  ]
  
})

export class ToastNotifyComponent  {
  successImg:any="./assets/Imgs/check2.png";
  alertImg:any="./assets/Imgs/warning.png";
  errorImg:any="./assets/Imgs/cross.png";
  closeImg:any="./assets/Imgs/close.png";
  moment: any = moment;
  message = 'Successful Messages';
  constructor(public toast: ToastService){
    
  }
  
 
  toggleVisibility() {
    console.log('click');
  
      this.toast.closeToast();
      setTimeout(() => {
        this.toast.dismissToast();
      }, 900);
     
    

  }
 

 
}



