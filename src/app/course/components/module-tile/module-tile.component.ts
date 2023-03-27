import { Component, Input, OnInit } from '@angular/core';
import { ModuleType } from '../../types/module-type';

@Component({
  selector: 'app-module-tile',
  templateUrl: './module-tile.component.html',
  styleUrls: ['./module-tile.component.scss']
})
export class ModuleTileComponent implements OnInit {
  @Input() public module!: ModuleType
  constructor() { }

  ngOnInit(): void {
  }
  test(object: any){
    object.class
    console.log(this.module.isSelected)
  }
}
