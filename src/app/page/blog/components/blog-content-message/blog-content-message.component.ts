import { Component } from '@angular/core';


@Component({
  selector: 'app-blog-content-message',
  templateUrl: './blog-content-message.component.html',
  styleUrls: ['./blog-content-message.component.scss']
})
export class BlogContentMessageComponent {
  contentMessage: string

  constructor() {
    this.contentMessage = 'Content for showing application message'
  }

  public clear(): void {
    this.contentMessage = ""
  }
}
