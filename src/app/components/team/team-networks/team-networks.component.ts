import {Component, Input, OnInit} from '@angular/core';
import {TeamMemberLinksModel} from "../../../models/team-member-links-model";

@Component({
  selector: 'app-team-networks',
  templateUrl: './team-networks.component.html',
  styleUrls: ['./team-networks.component.css']
})
export class TeamNetworksComponent implements OnInit {
  @Input()item: TeamMemberLinksModel;
  constructor() {
  }

  ngOnInit(): void {}

}
