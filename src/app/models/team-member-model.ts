import {TeamMemberLinksModel} from "./team-member-links-model";
import {Model} from "./interfaces/model.interface";

export class TeamMemberModel implements Model{
  readonly img: string;
  readonly name: string;
  readonly content: string;
  readonly isActive?:boolean;
  readonly links: TeamMemberLinksModel;

  constructor(input: Partial<TeamMemberModel>) {
    this.img = input.img || '';
    this.name = input.name || '';
    this.content = input.content || '';
    this.isActive = input.isActive || false;
    this.links = new TeamMemberLinksModel(input.links || {});
  }
}
