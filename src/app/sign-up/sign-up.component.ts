import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  constructor() { 
    this.signUpForm= new FormGroup({
      "name": new FormControl(null),
      "Email": new FormControl(null),
      "phone": new FormControl(null)
   })
  }
  onSubmit(){ 
     console.log(this.signUpForm.value)
  }
  
  ngOnInit(): void {
    
  }

}
