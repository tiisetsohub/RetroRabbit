import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  
  Image: string=""
  Name: string=""
   Time: string=""
   Venue: string=""
   Date: string=""

   Description: string=""
   VipPrice: string=""
   RPrice: string=""

  ngOnInit(): void {
      this.router.queryParams.subscribe(params => {
        this.Image =params['Image']
        this.Name =params['Name']
        this.Time =params['Time']
        this.Venue =params['Venue']
        this.Date =params['Date']
        this.Description =params['Description']
        this.VipPrice =params['VipPrice']
        this.RPrice =params['RPrice']
        // console.log(params)
      })
  }

}
