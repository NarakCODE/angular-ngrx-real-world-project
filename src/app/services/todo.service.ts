import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAllTodosWithLimit(limit: number = 5) {
    const todosUrl = `${this.baseUrl}/todos?_limit=${limit}`;
    return this.http.get<any>(todosUrl);
  }
}
