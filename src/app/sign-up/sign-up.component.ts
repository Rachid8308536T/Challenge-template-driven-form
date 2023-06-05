import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
user: User= new User("","","","")

onSubmit(){
  console.log(this.user)
}
}



export class User {
  constructor(
    public firstname: string,
    public lastname: string,
    public password: string,
    public email: string,
  ) {}
}

