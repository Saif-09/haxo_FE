import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.signupForm = this.formBuilder.group({
      'Username':['', Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required],
    })
  }


  ngOnInit(): void {
      
  }

}
