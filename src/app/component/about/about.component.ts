import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public name = '';
  public age = '';
  public comments;
  public posts;

  constructor() {
    // this.age = common.age;
  }

  ngOnInit(): void {
  }
}
