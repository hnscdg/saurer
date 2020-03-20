import { Component, OnInit } from '@angular/core';
// import { Scene, LineLayer, CityBuildingLayer } from '@antv/l7';
// import { GaodeMap } from '@antv/l7-maps';

interface ItemData {
  name: string;
  age: number | string;
  address: string;
  checked: boolean;
  expand: boolean;
  description: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  listOfData: ItemData[] = [];
  displayData: ItemData[] = [];
  bordered = false;
  loading = false;
  sizeChanger = false;
  pagination = true;
  header = true;
  title = true;
  footer = true;
  fixHeader = false;
  size = 'small';
  expandable = true;
  checkbox = true;
  allChecked = false;
  indeterminate = false;
  simple = false;
  noResult = false;
  position = 'bottom';

  currentPageDataChange($event: ItemData[]): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }


  constructor() { }

  
  ngOnInit(): void {
    for (let i = 1; i <= 100; i++) {
      this.listOfData.push({
        name: 'John Brown',
        age: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        expand: false
      });
    }
  }

  noResultChange(status: boolean): void {
    this.listOfData = [];
    if (!status) {
      this.ngOnInit();
    }
  }


}