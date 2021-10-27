import {TeamMemberLinksModel} from "./team-member-links-model";

export interface TeamMemberModel {
  img:string;
  name:string;
  content:string;
  isActive?:boolean;
  links: TeamMemberLinksModel;
}
