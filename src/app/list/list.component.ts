import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  datas = [
      { id:'1',state:"预约"}, { id:'1',state:"进行中"}, { id:'1',state:"未进行"},
      { id:'1',state:"预约"}, { id:'1',state:"进行中"}, { id:'1',state:"未进行"},
      { id:'1',state:"预约"}, { id:'1',state:"进行中"}, { id:'1',state:"未进行"},
  ];

  constructor(
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  switchColor(data){
     if(data.state == "预约"){
        return this._sanitizer.bypassSecurityTrustStyle("RGBA(107, 169, 255, 0.7)");
     }
     if(data.state == "进行中"){
    return this._sanitizer.bypassSecurityTrustStyle("RGBA(254, 141, 120, 0.7)");
      
     }
     if(data.state == "未进行"){
    return this._sanitizer.bypassSecurityTrustStyle("RGBA(124, 213, 167, 0.7)");
     }
  }
}
