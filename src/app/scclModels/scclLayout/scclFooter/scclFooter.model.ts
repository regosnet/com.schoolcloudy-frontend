import { IScclButton } from "../../scclComponents";

export interface IScclFooter{
    height?: number;
    btns?: {
        btnConfigs?: IScclButton
        linkBtnConfigs?: IScclButton
    }
}