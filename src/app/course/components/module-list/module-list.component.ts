import { Component, Input, OnInit } from '@angular/core';
import { MediaType } from '../../types/media-type';
import { ModuleType } from '../../types/module-type';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {
  @Input() modules: ModuleType[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
