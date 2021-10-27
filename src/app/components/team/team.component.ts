import {ChangeDetectorRef, Component, Inject, Input, OnInit, SimpleChanges} from '@angular/core';
import {TeamMemberModel} from "../../models/team-member-model";
import {TeamMemberLinksModel} from "../../models/team-member-links-model";
import {DOCUMENT} from "@angular/common";

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
        img: '../../../../../assets/images/team/team-3.png',
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
        img: '../../../../../assets/images/team/team-2.png',
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
        img: '../../../../../assets/images/team/team-1.png',
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
