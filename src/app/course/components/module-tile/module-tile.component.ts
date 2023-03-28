import { Component, Input, OnInit } from '@angular/core';
import { ModuleType } from '../../types/module-type';

@Component({
  selector: 'app-module-tile',
  templateUrl: './module-tile.component.html',
  styleUrls: ['./module-tile.component.scss']
})
export class ModuleTileComponent implements OnInit {
  @Input() public module!: ModuleType;
  isSelected: boolean = false
  totalDuration: number = 0

  constructor() { }
  ngOnInit(): void {
    this.module.medias.forEach(element => {
      this.totalDuration+=element.duration
    });
  }

  showMedia(){
    this.isSelected = !this.isSelected
  }
}
