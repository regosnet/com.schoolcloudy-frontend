import { IScclUser} from "../../scclUser";

export interface IScclInstantMessage {
    sender:IScclUser;
    isRead: Boolean;
    typeIcon: string;
    time: string
    text: string
    
}