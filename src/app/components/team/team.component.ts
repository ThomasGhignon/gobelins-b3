import {ChangeDetectorRef, Component, Inject, Input, OnInit, SimpleChanges} from '@angular/core';
import {TeamMemberModel} from "../../models/team-member-model";
import {TeamMemberLinksModel} from "../../models/team-member-links-model";
import {DOCUMENT} from "@angular/common";
import * as faker from "faker";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMemberList: any[];

  @Input() toggleSocialLinks : boolean;

  constructor(@Inject(DOCUMENT) private readonly document: Document, private readonly changeDetectorRef: ChangeDetectorRef) {


    this.teamMemberList = [
      new TeamMemberModel({
        img: faker.image.imageUrl(140,140,undefined,true,true),
        name:'@Rigoberto Valenza',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
        isActive: true,
        links: new TeamMemberLinksModel({
          github: '#',
          skype: '',
          twitter: '',
        }),
      }),
      new TeamMemberModel({
        img: faker.image.imageUrl(140,140,undefined,true,true),
        name:'@Donald Laughlin',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
        isActive: false,
        links: new TeamMemberLinksModel({
          github: '#',
          skype: '',
          twitter: '#',
        }),
      }),
      new TeamMemberModel({
        img: faker.image.imageUrl(140,140,undefined,true,true),
        name:'@Venessa Smith',
        content: 'You want customer to your store. Easily your coupans and has\n Clooger.',
        isActive: true,
        links: new TeamMemberLinksModel({
          github: '',
          skype: '#',
          twitter: '#',
        }),
      }),
    ];
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges){
    this.changeDetectorRef.detectChanges();
  }

}
