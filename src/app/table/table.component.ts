import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';
import {DataService} from "../services/data.service";
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  public order: number = 0;
  public field: string;
  public page: number = 1;
  public name: string;
  public titles: any;
  public pageCount = 5000/20;
  public pageArray = new Array(this.pageCount);
  @Input() data: string;
  @Output() sortEv = new EventEmitter();

  ngOnChanges(e){
    if(e.data['currentValue']){
      this.titles = Object.keys(e.data['currentValue'][0]);
    }
  }

  ngOnInit() {
    this.name = "Alex";
  }
  setPage(id: number){
    this.page = id;
    this.sort(this.field, true);
  }
  sort(param = this.titles[0], page = false) {
    if(this.field !== param){
      this.field = param;
      this.order = 1;
    } else if(!page){
      this.changeOrder();
    }
    const data = {
      "filed": this.field ,
      "order": this.order,
      "page": this.page
    };
    this.sortEv.emit(data);
  }
  changeOrder() {
    switch (this.order){
      case 0:
        this.order = 1;
        break;
      case 1:
        this.order = -1;
        break;
      case -1:
        this.order = 0;
        break;
    }
  }

}
