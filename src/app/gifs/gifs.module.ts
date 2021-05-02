import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { SearchComponent } from './search/search.component';
import { ReturnComponent } from './return/return.component';
import { GifsService } from './services/gifs.service';



@NgModule({
  declarations: [
    GifsPagesComponent,
    SearchComponent,
    ReturnComponent
  ],
  exports:[
    GifsPagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
