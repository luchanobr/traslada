import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  BehaviorSubject,
  distinctUntilChanged,
  map,
  Observable,
  tap,
} from 'rxjs';

export interface Noticia {
  titulo: string;
  fechaPublicacion: Date;
  likes: number;
}

@Injectable({ providedIn: 'root' })
export class NoticasService {
  private apiURL = environment.api;

  private noticias = new BehaviorSubject<Array<Noticia>>([]);

  private noticias$ = this.noticias.asObservable().pipe(distinctUntilChanged());

  constructor(private http: HttpClient) {}

  fetchNoticias(): void {
    this.http
      .get<Array<Noticia>>(this.apiURL)
      .pipe(tap((v) => this.noticias.next(v)))
      .subscribe();
  }

  getNoticias(): Observable<Array<Noticia>> {
    return this.noticias$;
  }

  addLike(i: number): void {
    const oldNoticias = this.noticias.value;
    oldNoticias[i].likes++;
    this.noticias.next(oldNoticias);
  }

  getTotalLikes(): Observable<number> {
    return this.noticias$.pipe(
      map((noticias) => {
        return noticias.length > 0
          ? noticias
              .map((noticia) => noticia.likes)
              .reduce((acc, curr) => acc + curr)
          : 0;
      })
    );
  }
}
