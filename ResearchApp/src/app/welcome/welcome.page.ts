import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  public pass: string;

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {
  }

  passes = ["Garage", "Lot"];
  passHandler(event) {
    // get data throught event emitter
    this.pass = event.target.value;
    console.log(this.pass)
  }
  
  passChosen(event) {
    console.log('You chose: ', event.target.value);
  }

  
  next(){
    this.router.navigate(["/pass"], { state: { pass: this.pass } });
  }
}
