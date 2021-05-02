import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifService:GifsService) { }

  ngOnInit(): void {
  }

  get getGitsItems():string[]{

    return this.gifService.history;
  }


  selectItem(name:string)
  {

    this.gifService.searchGifs(name);
  }
}
