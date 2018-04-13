import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-more-http-requests',
  templateUrl: './more-http-requests.component.html',
  styleUrls: ['./more-http-requests.component.css']
})
export class MoreHttpRequestsComponent implements OnInit {
  data: Object;
  loading: boolean;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  makePost() {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8'
    });
    this.loading = true;
    this.http.post('https://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'testing2',
        title: 'post title',
        userId: 11
      })
    ).subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }

  makeDelete() {
    this.loading = true;
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }
}
