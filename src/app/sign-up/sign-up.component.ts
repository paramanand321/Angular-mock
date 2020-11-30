import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpForm: FormGroup;

  constructor() { 
    this.signUpForm= new FormGroup({
      "name": new FormControl(null, Validators.required),
      "Email": new FormControl(null,[Validators.required,Validators.email]),
      "phone": new FormControl(null,Validators.required)
   })
  }
  /* function onSubmit
* @purpose: submitting the formdata
* @version: 1.0.1
* @author: paramanand
*/
  public onSubmit(): void { 
     console.log(this.signUpForm)
  }
  
  ngOnInit(): void {
    
  }

}
