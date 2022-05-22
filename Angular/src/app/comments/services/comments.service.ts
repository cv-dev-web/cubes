import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../types/comment.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  apiURL:string = "https://projetcube.cv-dev-web.fr/apiPlatform";

  getComments(): Observable<CommentInterface[]> {
    return this.httpClient.get<CommentInterface[]>(
        this.apiURL+'comments'
    );
  }

  createComment(
    text: string,
    parentId: string | null = null
  ): Observable<CommentInterface> {
    return this.httpClient.post<CommentInterface>(
        this.apiURL+'comments',
      {
        body: text,
        parentId,
        // Should not be set here
        createdAt: new Date().toISOString(),
        userId: '1',
        username: 'John',
      }
    );
  }

  updateComment(id: string, text: string): Observable<CommentInterface> {
    return this.httpClient.patch<CommentInterface>(
        this.apiURL+`comments/${id}`,
      {
        body: text,
      }
    );
  }

  deleteComment(id: string): Observable<{}> {
    return this.httpClient.delete(this.apiURL+`comments/${id}`);
  }
}