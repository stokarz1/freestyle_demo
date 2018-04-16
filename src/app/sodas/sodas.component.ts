import { Component, OnInit } from '@angular/core';
import { Soda } from '../soda';
import { SODAS } from '../mock_sodas';

@Component({
  selector: 'app-sodas',
  templateUrl: './sodas.component.html',
  styleUrls: ['./sodas.component.css']
})
export class SodasComponent implements OnInit {

  constructor() { }
  
  sodas = SODAS;
  ngOnInit() {
  }

}
