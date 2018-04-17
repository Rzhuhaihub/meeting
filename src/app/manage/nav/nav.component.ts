import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input()
  menuList: Array<any>
  @Output()
  onMenuChange = new EventEmitter<any>()

  constructor(
  ) { }

  ngOnInit() {
  }

  toogleOpen(menu) {
    if (menu.menus && menu.menus.length > 0) {
      menu._open = !menu._open;
    } else {
      if (!menu.select) {
        this.menuList.map(m => {
          this.disSelectMenu(m)
        })
        menu.select = true;
        this.onMenuChange.emit({
          menu,
          id: menu.id
        })
      }
    }
  }

  childChange(e) {
    this.menuList.map(m => {
      this.disSelectMenu(m)
      if (this.ifSelect(m, e.id) ) {
        this.onMenuChange.emit({
          m,
          id: e.id
        })
      }
    });
  }
  disSelectMenu(menu) {
    menu.select = false;
    if (menu.menus) {
      menu.menus.map(i => {
        this.disSelectMenu(i)
      })
    }
  }

  ifSelect(menu, id) {
    let result = false
    if (menu.id == id) {
      menu.select = true;
      return true
    }
    if(menu.menus && menu.menus.length > 0) {
     result =  menu.menus.reduce((pre, item) => {
       return pre || this.ifSelect(item, id)
      },false)

    }
    if (result == true){
      menu.select = true;
    }
    return result
  }
}
