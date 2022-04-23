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

  @Input() Description: string=""
  @Input() VipPrice: string=""
  @Input() RPrice: string=""

  constructor(private router: Router) { }

  onClick(){
    this.router.navigate(['/details'], { queryParams:
       {Image:this.Image, Name:this.Name,Time:this.Time, Venue:this.Venue,Date:this.Date,Description:this.Description,VipPrice:this.VipPrice,RPrice:this.RPrice}})
  }

}
