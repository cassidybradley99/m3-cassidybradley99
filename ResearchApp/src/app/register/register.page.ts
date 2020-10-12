import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user={
  email:"",
  password:"",
  };

  name;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  // writeUserData(userID, name, email, password) {
  //   firebase.database().ref('users/' + userID).set({
  //     name: name,
  //     email: email,
  //     password : password,
  //   });
  //   console.log(name)
  // }
  
  doSignup(){
  	console.log(this.user.email+"  "+this.user.password)
  	var email=this.user.email;
    var password=this.user.password;
  	var self=this;
  

  	firebase.auth().createUserWithEmailAndPassword(email, password).catch(
  		function(error) {
	  // Handle Errors here.
	  console.log(error);
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(error.message);
	  if(errorCode.length > 0){
	  	console.log("Failed");
	  }
	  else{
	  	console.log("signup ok")
	  }
	  // ...
	});
		  	self.router.navigate(["/login"]);
      
        
    }
  }
