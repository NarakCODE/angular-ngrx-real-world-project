import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAllTodosWithLimit(limit: number = 5): Observable<Todo[]> {
    const todosUrl = `${this.baseUrl}/todos?_limit=${limit}`;
    return this.http.get<Todo[]>(todosUrl).pipe(
      catchError(error => {
        console.log(`Error: ${error.message}`);
        return of([]);
      })
    );
  }
}
