import { IScclUser} from "../../scclUser";

export interface IScclNotificationMessage {
    sender:IScclUser;
    isRead: Boolean;
    typeIcon: string;
    time: string,
    text: string
    
}