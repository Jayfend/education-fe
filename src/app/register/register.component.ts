import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserCreateModel } from 'src/models/register/createusermodel';
import { RegisterService } from '../services/register/register.service';
import { ToastService } from '../services/toast/toast.service';
import { TOAST_STATE } from '../services/toast/toast.service';
import { Router } from '@angular/router';

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

  constructor( private formBuilder: FormBuilder,private registerService: RegisterService, private toastService: ToastService, private router: Router){}
  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),this.validatePassword]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6),this.validatePassword]],
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
  getPasswordErrorMessage(): string {
    const passwordControl = this.checkoutForm.get('password');
    if (passwordControl.hasError('required')) {
      return 'Password is required.';
    }
    if (passwordControl.hasError('minlength')) {
      return 'Password should be at least 6 characters.';
    }
    if (passwordControl.hasError('specialChars')) {
      return 'Password should include special characters.';
    }
    return '';
  }
  getConfirmPasswordErrorMessage(): string {
    const passwordControl = this.checkoutForm.get('confirmPassword');
    if (passwordControl.hasError('required')) {
      return 'Password is required.';
    }
    if (passwordControl.hasError('minlength')) {
      return 'Password should be at least 6 characters.';
    }
    if (passwordControl.hasError('maxlength')) {
      return 'Password should not exceed 12 characters.';
    }
    if (passwordControl.hasError('specialChars')) {
      return 'Password should include special characters.';
    }
    return '';
  }
  getUserNameErrorMessage(): string {
    const passwordControl = this.checkoutForm.get('userName');
    if (passwordControl.hasError('required')) {
      return 'Password is required.';
    }
    if (passwordControl.hasError('minlength')) {
      return 'Password should be at least 3 characters.';
    }
  
    return '';
  }
  getEmailErrorMessage(): string {
    const passwordControl = this.checkoutForm.get('email');
    if (passwordControl.hasError('required')) {
      return 'Password is required.';
    }
    if (passwordControl.hasError('email')) {
      return 'Invalid email format.';
    }
  
    return '';
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
          this.router.navigate(['/login'])
        }
        else{
          this.toastService.showToast(TOAST_STATE.danger,"Đăng ký thất bại");
          this.checkoutForm.reset();
        }
      }
      
      );
    // You can now process the form data, submit it to the server, etc.
  }
  
  }
}
