import { BasicResponse } from "../types";

export interface IHelloController {
    getMessage(name?:string): Promise<BasicResponse> //el ? hace que pueda ser string u otra cosa
}