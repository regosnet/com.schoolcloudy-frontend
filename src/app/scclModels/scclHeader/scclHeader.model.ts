import { 
        IScclFootHead,
        IScclMidHead,
        IScclTopHead
} from "./";

export interface IScclHeader {
    footHeadConfig: IScclFootHead
    midHeadConfig: IScclMidHead;
    topHeadConfig: IScclTopHead;
}