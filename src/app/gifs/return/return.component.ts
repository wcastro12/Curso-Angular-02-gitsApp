import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gifs.interfaces';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent {

  constructor(private gifservice:GifsService) { }

  get returnvalues():Gif[]
  {
    return this.gifservice.resultados;
  }

}
