import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMemberList: any[];

  constructor() {
    this.teamMemberList = [
      {
        img: '../../../../../assets/images/team/team-3.png',
        name:'@Donald Laughlin',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
        isActive: false,
        links: {
          github: '#',
          skype: '#',
          twitter: '#',
        },
      },
      {
        img: '../../../../../assets/images/team/team-2.png',
        name:'@Rigoberto Valenza',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
        isActive: false,
        links: {
          github: '#',
          skype: '#',
          twitter: '#',
        },
      },
      {
        img: '../../../../../assets/images/team/team-1.png',
        name:'@Venessa Smith',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
        isActive: true,
        links: {
          github: '#',
          skype: '#',
          twitter: '#',
        },
      }
    ];
  }

  ngOnInit(): void {
  }

}
