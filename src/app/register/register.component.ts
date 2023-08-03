import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserCreateModel } from 'src/models/register/createusermodel';
import { RegisterService } from '../services/register/register.service';
import { ToastService } from '../services/toast/toast.service';
import { TOAST_STATE } from '../services/toast/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  checkoutForm: FormGroup;
  registerImg1:any="./assets/Imgs/letter.png"
  registerImg2:any="./assets/Imgs/user.png"
  registerImg3:any="./assets/Imgs/password.png"
  registerImg4:any="./assets/Imgs/password.png"
  registerImg5:any="./assets/Imgs/laptop2.png"

  constructor( private formBuilder: FormBuilder,private registerService: RegisterService, private toastService: ToastService){}
  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.checkoutForm.valid) {
      const formData = this.checkoutForm.getRawValue(); // Get form data

      const userInfo: UserCreateModel = {
        userName: formData.userName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      };
      console.log(userInfo);
      this.registerService.registerUser(userInfo).subscribe((res:boolean)=>{
        if(res==true){
          this.toastService.showToast(TOAST_STATE.success,"Đăng ký thành công");
        }
        else{
          this.toastService.showToast(TOAST_STATE.danger,"Đăng ký thất bại");
        }
      }
      
      );
    // You can now process the form data, submit it to the server, etc.
  }
  
  }
}
