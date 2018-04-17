import { Component, OnInit } from '@angular/core';
import { format } from "date-fns";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = '会议管理系统'
  time: string = ''
  weekDay = ["日","一","二","三","四","五","六"]
  TimeInterval
  constructor() {
    this.time = format(new Date(), 'YYYY/MM/DD') + " 星期" + this.weekDay[new Date().getDay()]
    this.TimeInterval = setInterval(() => {
      this.time = format(new Date(), 'YYYY/MM/DD') + " 星期" + this.weekDay[new Date().getDay()]
    }, 1000)
  }

  ngOnInit() {

  }

}
