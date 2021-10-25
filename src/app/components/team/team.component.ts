import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamData: any[];

  constructor() {
    this.teamData = [
      {
        img: '../../../../../assets/images/team/team-3.png',
        name:'@Donald Laughlin',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
      },
      {
        img: '../../../../../assets/images/team/team-2.png',
        name:'@Rigoberto Valenza',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
      },
      {
        img: '../../../../../assets/images/team/team-1.png',
        name:'@Venessa Smith',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
      }
    ];
  }

  ngOnInit(): void {
  }

}
