import { IScclButton } from "../../../scclModels/scclComponents";

export interface IScclFooter {
    title: string;
    height: number;
    buttons: IScclButton[];
}