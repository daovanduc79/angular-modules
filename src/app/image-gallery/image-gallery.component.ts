import { Component, OnInit, Inject, Optional } from '@angular/core';
import { GelleryConfig } from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {

  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];

  itemWidth: number;
  config = 4;

  constructor(
    @Inject(GelleryConfig)
    @Optional()
    config: number
  ) {
    if (config) {
      this.config = config;
    }
    console.log(this.config)
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }

}
