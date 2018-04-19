import { ThreadsService } from './../services/threads.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  constructor(private threadsService: ThreadsService) {
  }

  ngOnInit() {
  }

}
// implement api call to fetch data from backend
// once get data will want to pass inside store - store action
