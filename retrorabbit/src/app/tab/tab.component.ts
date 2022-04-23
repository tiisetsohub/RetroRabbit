import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent{
  @Input() Image: string=""
  @Input() Name: string=""
  @Input() Time: string=""
  @Input() Venue: string=""
  @Input() Date: string=""
  constructor(private router: Router) { }

  onClick(){
    this.router.navigate(['/details'])
  }

}
