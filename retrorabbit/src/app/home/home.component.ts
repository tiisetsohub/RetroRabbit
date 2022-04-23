import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }
  data: any[] = [
  {
    Image: 'racing 1.svg',
    Name: 'Kyalami Grand Prix',
    Time: '17:00',
    Date: '22 April 2022',
    Venue: 'Kyalami Curcuit',
    Desc: 'Racing event taking place at Kyalami , at five pm on  April 2022. There`s gonna be the legendary Lewis Hamilton as guest . Other guest include Chris Rock the Oscar award presenter , Will Smith the Bad Boys 4 life actor, Mike Tyson  is also coming and many more.Be there or be told. ',
    Price: 'R1500',
    VipPrice: '1800'
  },{
    Image: 'Cotton-Fest 2.png',
    Name: 'Cotton Fest',
    Time: '18:00',
    Date: '22 April 2022',
    Venue: 'Newtown Junction',
    Desc: 'Hosted on the 23rd & 24th of April, this festival kick starts the year in style. Don’t miss out as it’s guaranteed to be the event of the year.​ Line up include 25kv , Abidoza ,Aka, Amaroto ,Cassper NYOVWET,Musa Keys,Stogie T, Priddy Ugly,Stilo Magolide,Emtee,Areece Big Zulul Duncan,Costa Tich ,Uncle WAFFLES. ',
    Price: 'R1800',
    VipPrice: 'R7000'
  },{
    Image: 'images 1.png',
    Name: 'Retro Rabbit ',
    Time: '8:00',
    Date: '23 April 2022',
    Venue: 'Wits MSL004',
    Desc: 'Come code for few ours , We have pizza ,some gift bags ,some certificates LOL,andy awesome cool prizes rto win. But seriously Jump Sessions are aimed at up skilling eager Information Technology and Experience Design students by bridging the gap (jumping) between university and the commercial working environment.. ',
    Price: 'R5',
    VipPrice: 'R70'
  },{
    Image: 'wine tasting.png',
    Name: 'Wine Tasting',
    Time: '13:00',
    Date: '05 May 2022',
    Venue: 'Bellville Vineyard',
    Desc: 'We are beyond excited to welcome you back to our tasting rooms this year! With safety protocols in place, we will be hosting a number of new events in both Cape Town and Johannesburg. The second tasting schedule of 2022 has been released – see our events line-up below. Please sign up to our mailing list if you would like to receive our newsletter when the.',
    Price: 'R400',
    VipPrice: 'R600'
  },{
    Image: 'grads.png',
    Name: 'Wits Graduation',
    Time: '8:00',
    Date: '12 June 2022',
    Venue: 'Wits',
    Desc: 'Congratulations! You have conquered the edge , goodluck with finduing a job you will be missed.Go to the real world and start a family and spend time withb your loved ones',
    Price: 'R100',
    VipPrice: 'R170'
  },{
    Image: 'freshers-party 1.png',
    Name: 'Freshers Party',
    Time: '8:00',
    Date: '21 June 2022',
    Venue: 'Wits hall29',
    Description: 'Well come to the mighty wits ,hope you know what you got yourselves into. We start by celebrating and laghter because tears and pain are coming your way. You will not have time to celebrate.  ',
    Price: 'R400',
    VipPrice: 'R1200'
  },{
    Image: 'street bash.png',
    Name: 'Street Bash',
    Time: '17:00',
    Date: '24 April',
    Venue: 'Drama',
    Description: 'An event that brings the underground scene to life, by inviting some of South Africa come give an experience like no other on the streets of Kagiso. A carefully curated line up whose mandate is to not compromise but to educate to an o',
    Price: 'R80',
    VipPrice: 'R150'
  }
]
eventR (){

}
}
