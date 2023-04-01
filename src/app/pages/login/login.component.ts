import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup
  message!: string;

  constructor(private formBuilder:FormBuilder, private auth:AuthService,private router:Router){
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
      
      if(res.status){
        console.log(res);
        localStorage.setItem('token', res.token)
        alert(res.status)
        this.router.navigate(['/profile']);
      }else{
        alert(res.message)
      }
    },err=>{
      alert('Login Failed')
    })
  }

  

}
