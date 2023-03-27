import { Component, Input, OnInit } from '@angular/core';
import { MediaType } from '../../types/media-type';

@Component({
  selector: 'app-media-tile',
  templateUrl: './media-tile.component.html',
  styleUrls: ['./media-tile.component.scss']
})
export class MediaTileComponent implements OnInit {
  @Input() media!: MediaType
  constructor() { }

  ngOnInit(): void {
  }

}
