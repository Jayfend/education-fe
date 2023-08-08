import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { TOAST_STATE, ToastService } from '../services/toast/toast.service';
import { LoginService } from '../services/login/login.service';
import { LogintokenResponse } from 'src/models/login/logintokenres';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkoutForm: FormGroup;
  registerImg1:any="./assets/Imgs/letter.png"
  registerImg2:any="./assets/Imgs/user.png"
  registerImg3:any="./assets/Imgs/password.png"
  registerImg4:any="./assets/Imgs/password.png"
  registerImg5:any="./assets/Imgs/laptop.png"
  constructor( private formBuilder: FormBuilder,private toastService: ToastService, private loginService:LoginService){}

ngOnInit() {
  this.checkoutForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6),this.validatePassword]],
  });
}

validatePassword(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
  
  if (!hasSpecialChars) {
    return { specialChars: true };
  }
  
  return null;
}
submitForm() {
  if (this.checkoutForm.valid){
    const formData = this.checkoutForm.getRawValue();
    var userName = formData.userName;
    var password = formData.password;
    this.loginService.getToken(userName, password).subscribe(
     {
        next: (res:LogintokenResponse)=>{
          const accessToken = res.access_token;
          localStorage.setItem('access_token', accessToken);
          console.log('Token saved:', accessToken);
          this.toastService.showToast(TOAST_STATE.success,"Đăng nhập thành công");
        },
        error: (res:any)=>{
          console.log(res);
          var errorMessage = res.error.error_description.toString().replaceAll("_"," ");
          this.toastService.showToast(TOAST_STATE.danger,errorMessage);
        }
     }
    );
  }
  
}


}

