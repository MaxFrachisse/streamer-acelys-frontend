import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaType } from '../../types/media-type';
import { ModuleType } from '../../types/module-type';
import { RemoveDialogComponent } from '../dialogs/remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-module-tile',
  templateUrl: './module-tile.component.html',
  styleUrls: ['./module-tile.component.scss']
})
export class ModuleTileComponent implements OnInit {
  @Input() public module!: ModuleType;
  isSelected: boolean = false

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(RemoveDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }
  showMedia(){
    this.isSelected = !this.isSelected
    console.log(this.isSelected)
  }
}
