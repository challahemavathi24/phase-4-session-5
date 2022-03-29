import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 registerForm:FormGroup;
 submitted:boolean=false;
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm= this.builder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required,Validators.minLength(8)]
    });

  }

onSubmit()
{
  this.submitted=true;
  if(this.registerForm.invalid)
  return;
  else
  alert("Form submitted and sent for approval")
}
get f()
{
  return this.registerForm.controls;
}
