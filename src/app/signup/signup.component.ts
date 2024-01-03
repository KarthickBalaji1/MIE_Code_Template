import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'app/Service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

data = {
  
    "id": 0,
    "firstName": "arun",
    "lastName": "kumar",
    "userName": "arunkumar@mail.com",
    "password": "arunkumar12",
    "role": "user",
    "email": "arunkumar@mail.com",
    "mobileNumber": "99882344"
  
}


  constructor(private userservice:UserServiceService) { }

  ngOnInit(){

    this.userservice.createuser(this.data).subscribe( (res => {
      console.log(res)
    }))
   
      
  }

  registeruser()
  {
    this.userservice.createuser(this.data).subscribe( (response => 
      {
        console.log(this.data = response);
      }))

    
  }
}
