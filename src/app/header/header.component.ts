import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { TOAST_STATE, ToastService } from '../services/toast/toast.service';
import { LoginService } from '../services/login/login.service';
import { UserInfoRes } from 'src/models/login/userinfores';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showOption:boolean = false;
  headerImg:any="./assets/Imgs/Frame 8.png"
  userName: string =""
  firstLetter: string =""
  constructor(private jwtHelper: JwtHelperService,private router: Router,private toast: ToastService, private loginService: LoginService) { }

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
     this.userName = localStorage.getItem('current_user');
     console.log(this.userName);
     this.firstLetter = Array.from(this.userName)[0].toString();
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
