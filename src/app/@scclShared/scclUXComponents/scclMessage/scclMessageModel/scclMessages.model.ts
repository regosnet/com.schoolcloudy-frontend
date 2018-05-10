import { IScclUser } from '../../../../scclModels';
import { MessageHeader } from './tags/messageHeader.model';
import { MessageBody } from './tags/messageBody.model';
import { MessageButtonConfig } from './tags/messageBtnConfig.model';

export interface IScclMessage {
    header: Array<MessageHeader>;
    btn_conf: MessageButtonConfig;
    content: Array<MessageBody>;
}

