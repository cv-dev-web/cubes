import { Levels } from "./levels";
import { Resources } from "./resources";

export class Users {
    public id: number;
    public lastName: string;
    public firstName: string;
    public birthDate:string;
    public email:string;
    public password:string;
    public plainPassword:string;
    public avatar:string;
    public isActif:boolean;
    public firstConnexion:boolean;
    public grade:string;
    public phone:string;
    public userCreationDate:string;
    public resources:Array<Resources>;
    public levels:Array<Levels>;
}
export class Users2 {
    public id: number;
    public lastName: string;
    public firstName: string;
    public birthDate:string;
    public email:string;
    public password:string;
    public avatar:string;
    public isActif:boolean;
    public firstConnexion:boolean;
    public grade:string;
    public phone:string;
    public userCreationDate:string;
    public resources:Array<Resources>;
    public levels:Array<Levels>;
}
