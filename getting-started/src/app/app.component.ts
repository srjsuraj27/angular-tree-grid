import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { 
  PageSettingsModel, 
  SortSettingsModel, 
  EditSettingsModel
} from '@syncfusion/ej2-angular-treegrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // constructor(
  //   public PageSettings: PageSettingsModel,
  //   public data: Object[]
  // ) { }

  public data: Object[] = [];
  public pageSettings: PageSettingsModel = {};
  public sortSettings: SortSettingsModel = {};
  public editSettings: EditSettingsModel = {};
  public toolbar: string[] = [];
  public numericParams: Object = {};
  public commands: Object[] = [];

  ngOnInit(): void {
    this.data = sampleData;
    this.pageSettings = { pageSize: 6 };
    this.sortSettings = { 
      columns: [
        { field: "taskName", direction: "Ascending"},
        { field: "taskID", direction: "Descending"}
      ]
    },
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Row'
    },
    this.toolbar = [ 'Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.numericParams = { params: { format: 'n' }};
    this.commands = [{ type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
    { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
    { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
    { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }];
  }

  title = 'getting-started';
}
