import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http : HttpClient ) { }

  getCompeProcess(query: string) {
    const data = {
      query: query,
      fl: "* score",
      indent: true,
      rows: 376,
      useParams: ""
    };

    const httpOptions = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Content-Type': 'application/json'
      }
    };

    const url = `${environment.api.url}/compe/select?fl=${data.fl}&indent=${data.indent}&q.op=OR&q=${data.query}&rows=${data.rows}&useParams=${data.useParams}`;
    /*const url = "assets/data.json";*/
    return this.http.get(url, httpOptions)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
