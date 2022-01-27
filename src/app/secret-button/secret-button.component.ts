import { Component, OnInit } from '@angular/core';
import { RangeValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-secret-button',
  templateUrl: './secret-button.component.html',
  styleUrls: ['./secret-button.component.css']
})
export class SecretButtonComponent implements OnInit {
  visibility:boolean = false;
  click = 0;
  log = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(){
    this.visibility = !this.visibility;
    this.click++;
  }
  getBackgroundColor(){
    return this.click >= 5 ? 'blue' : 'white';
  }

}
