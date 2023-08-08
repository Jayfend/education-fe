import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { TOAST_STATE, ToastService } from '../services/toast/toast.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showOption:boolean = false;
  headerImg:any="./assets/Imgs/Frame 8.png"
  constructor(private jwtHelper: JwtHelperService,private router: Router,private toast: ToastService) { }

  ngOnInit() {
    if (this.jwtHelper.isTokenExpired(localStorage.getItem('access_token'))) {
      // token expired
      localStorage.removeItem('access_token');
    } else {
      // token valid
    }
  }
   checkToken(){
    if(localStorage.getItem('access_token') != null){
      return true;
    }
    else{
      return false;
    }
   }
   signOut(){
    if(localStorage.getItem('access_token') != null){
      localStorage.removeItem('access_token');
    }
    this.toast.showToast(TOAST_STATE.success,"Đăng xuất thành công!");
    this.router.navigate(['/login'])


   }



  
  public toggleOption(){
    this.showOption = this.showOption === true ? false : true;
 }
}
