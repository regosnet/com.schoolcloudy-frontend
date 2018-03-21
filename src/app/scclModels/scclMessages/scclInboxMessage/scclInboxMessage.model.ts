import { IScclUser } from "../../scclUser";

export interface IScclInboxMessage {
    sender:IScclUser;
    isRead: Boolean;
    subject: string;
    typeIcon: string;
    time: string
    text: string
}