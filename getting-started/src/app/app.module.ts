import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { 
  TreeGridModule, 
  PageService, 
  SortService,
  FilterService,
  EditService,
  ToolbarService,
  CommandColumnService
} from '@syncfusion/ej2-angular-treegrid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeGridModule 
  ],
  providers: [
    PageService, 
    SortService, 
    FilterService, 
    EditService,
    ToolbarService,
    CommandColumnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
