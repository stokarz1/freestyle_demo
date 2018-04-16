import { Component, OnInit } from '@angular/core';
import { Soda } from '../soda';
import { SODAS } from '../mock_sodas';



@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css']
})
export class HomeMenuComponent implements OnInit {

  
  sodas = SODAS;
  showHomeMenu=true;
  showHomeNav=false;
  showSodaSelect=false;
  
  toggleVis(): void {
    this.showHomeMenu = !this.showHomeMenu;
    this.showHomeNav = !this.showHomeNav;
    this.showSodaSelect =!this.showSodaSelect;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
