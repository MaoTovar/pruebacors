import {Component, OnInit} from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'prueba-cors';
  data: any;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getCompeProcess();
  }

  getCompeProcess() {
    this.appService.getCompeProcess('prueba').subscribe((response: any) => {
      this.data = response;
      console.log(this.data);
    });
  }
}
