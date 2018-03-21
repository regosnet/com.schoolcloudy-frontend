import {
        IScclInstantMessage,
        IScclInboxMessage,
        IScclNotificationMessage,
        IScclMessageDropDownMenuHeader
} from "./";

export interface IScclMessages {
    chatMessages: Array<IScclInstantMessage>
    notificationMessages: Array<IScclNotificationMessage>
    inboxMessages: Array<IScclInboxMessage>
    dropDownMenuHeader: Array<IScclMessageDropDownMenuHeader>
}