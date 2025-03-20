import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-view',
  imports: [],
  templateUrl: './message-view.component.html',
  styleUrl: './message-view.component.scss',
})
export class MessageViewComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  params: any;
  queryParams: any;

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params['messageId'];
    this.queryParams = this.activatedRoute.snapshot.queryParams['course'];
  }
}
