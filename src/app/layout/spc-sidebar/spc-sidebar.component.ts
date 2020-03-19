import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spc-sidebar',
  templateUrl: './spc-sidebar.component.html',
  styleUrls: ['./spc-sidebar.component.less']
})
export class SpcSidebarComponent implements OnInit {
  isCollapsed = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
