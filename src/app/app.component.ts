import { Component, OnInit } from '@angular/core';
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  table1 = [{
    "title": "id",
    "sort": true,
    "input": 'text'
  },{
    "title": "title",
    "sort": false,
    "input": false
  },{
    "title": "text",
    "sort": false,
    "input": 'combo'
  }];
  arr: any;

  constructor(private api: DataService) { }

  ngOnInit() {
    setTimeout( () => {
      this.api.getData().subscribe((res: any) => {
        this.arr = res;
      });
    }, 1000);
  }

  handleSortEv(e){
    this.api.getDataSorted(e['filed'], e['order'], e['page']).subscribe((res: any) => {
      this.arr = res;
    });
  }
}
