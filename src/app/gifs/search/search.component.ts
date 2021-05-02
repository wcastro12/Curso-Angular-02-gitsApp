import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;
  constructor(private gitServices:GifsService) { }

  SearchData()
  {
    const valueGifs =this.txtSearch.nativeElement.value;
    this.txtSearch.nativeElement.value="";
    if(valueGifs.trim().length !==0){
    this.gitServices.searchGifs(valueGifs);
    
    }
  }

}
