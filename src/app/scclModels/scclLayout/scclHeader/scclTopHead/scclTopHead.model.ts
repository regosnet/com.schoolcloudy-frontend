import { IScclMessage } from '../../../../@scclShared/scclUXComponents/scclMessage/scclMessageModel';
import { IScclSchoolCalender } from '../../../scclEntities/scclSchoolCalender/scclSchoolCalender.model';
import { IScclUserActivity } from '../../../scclEntities/scclUserActivity/scclUserActivity.model';


export interface IScclTopHead {
   schoolCalender: IScclSchoolCalender;
   dateToday: Date;
   userActivity: IScclUserActivity;
}
