import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup

  constructor(private formBuilder:FormBuilder, private auth:AuthService){
    this.loginForm = this.formBuilder.group({
      
      'email':['',Validators.required],
      'password':['',Validators.required],
      
    })

  }

  ngOnInit():void {

  }
  login(){
    // alert("Login Successfull")
    const data = this.loginForm.value;
    this.auth.signin(data).subscribe((res)=>{
      // console.log(res);
      if(res.success){
        localStorage.setItem('token', res.token)
        alert(res.status)
      }else{
        alert(res.message)
      }
    },err=>{
      alert('Login Failed')
    })
  }

}
