import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { EventLogs } from "../models/eventlogs";

@Injectable({
    providedIn: 'root'
})
export class ApipService{

    baseUrl = environment.baseUlr;

    constructor(public http:HttpClient){}

    getEventLogs(){
        const url2 = this.baseUrl.replace('{pStartDate}','2023-10-10').replace('{pEndDate}','2023-10-20').replace('{pEventLogsTypeId}','');
        console.log(url2);
        return this.http.get<any>(url2);
    }
    getEventLog(id: string) {
        return this.http.get<any>(this.baseUrl+`?id=${id}`);
    }
    
    /*addEventLog(obj: any) {
        return this.http.post<any>(this.baseUrl, obj)
    }*/
}