import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
export const TOAST_STATE = {  
  success: 'bg-cyan-4',  
  warning: 'bg-yellow-2',  
  danger: 'bg-pink-2'
};
const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm'; 

var datetime = moment(new Date(), DATE_TIME_FORMAT).toString();
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  
  public showsToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);  
  public showsTime$: BehaviorSubject<string> = new BehaviorSubject<string>(datetime);
  public close$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);  
  // The message string that'll bind and display on the toast  ﻿. 
  public toastMessage$: BehaviorSubject<string> = new BehaviorSubject<string>('Default Toast Message');  

  // The state that will add a style class to the component  ﻿. 
  public toastState$: BehaviorSubject<string> = new BehaviorSubject<string>(TOAST_STATE.success);   
  constructor() { }
  showToast(toastState: string, toastMsg: string): void {  
    // Observables use '.next()' to indicate what they want done with observable    
    // This will update the toastState to the toastState passed into the function    ﻿
    this.toastState$.next(toastState);
    this.close$.next(false);       

    // This updates the toastMessage to the toastMsg passed into the function    ﻿
    this.toastMessage$.next(toastMsg);    
    this.showsTime$.next(datetime);
    // This will update the showsToast trigger to 'true'
    this.showsToast$.next(true); 
    console.log(this.showsToast$.getValue());
    setTimeout(() => {
      this.closeToast();
    }, 4500);  
    setTimeout(() => {
      this.dismissToast();
    }, 5000);
  }  

  // This updates the showsToast behavioursubject to 'false'  
  dismissToast(): void {    
    this.showsToast$.next(false);  
  }
  closeToast():void{
    this.close$.next(true);
  }
}
