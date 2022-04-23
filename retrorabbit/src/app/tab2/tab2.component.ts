import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})
export class Tab2Component implements OnInit {

  constructor() { }
  @Input() Image: string=""
  @Input() Name: string=""
  @Input() Time: string=""
  @Input() Venue: string=""
  @Input() Date: string=""

  @Input() Description: string=""
  @Input() VipPrice: string=""
  @Input() RPrice: string=""
  ngOnInit(): void {
  }

}
