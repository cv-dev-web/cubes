import { Contents } from "./contents";


export class Resources {
    user: string;
    title: string;
    category: string;
    type: string;
    text: string;
    visibility: boolean;
    modoValid: boolean;
    status: string;
 }
export class Resources2 {
    user: string;
    title: string;
    category: string;
    type: string;
    text: string;
    contents : Array<Contents>;
    visibility: boolean;
    modoValid: boolean;
    status: string;
 }