import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-pass',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage implements OnInit {
  pass:any;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.pass = this.router.getCurrentNavigation().extras.state.pass;
  }



}
