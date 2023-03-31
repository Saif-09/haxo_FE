import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!:FormGroup;
  message:string='';
  className = 'd-none'
  isProcess :boolean =false;

  constructor(private formBuilder:FormBuilder, private auth:AuthService){
    this.signupForm = this.formBuilder.group({
      'name':['', Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required],
      'password_confirmation':['',Validators.required],
    })
  }


  ngOnInit(): void {
      
  }
  signup(){
    this.isProcess = true;
    const data = this.signupForm.value;
    delete data['confirm']
    this.auth.signup(data).subscribe((res)=>{
      console.log(res);
      // alert("User Registration Successfull")
      if(res.success){
        this.isProcess = false;
        this.message = "Account Has Been Created";
        this.className = 'alert alert-success'
      }else{
        this.isProcess = false;
        this.message = res.message;
        this.className = 'alert alert-danger'
      }
      // this.signupForm.reset();
    }, err=>{
      this.isProcess = false;
        this.message = "Server Error";
        this.className = 'alert alert-danger'
    })
    // alert("form has been created")
  }

}
