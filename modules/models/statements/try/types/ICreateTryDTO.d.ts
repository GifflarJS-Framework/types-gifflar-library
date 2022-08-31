import { IInput } from "@models/definitions/function/types/IInput";
import { ITryExpression } from "./ITryExpression";
export interface ICreateTryDTO {
    expression: ITryExpression;
    parameters: Array<IInput>;
}
