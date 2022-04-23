import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component  {

  constructor(private router: Router) { }

  onClick(){
    this.router.navigate(['/home'])
  }
}
