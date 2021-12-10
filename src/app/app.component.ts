import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NoticasService, Noticia } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  isOpenSidebar: boolean = true;

  noticias$: Observable<Array<Noticia>> = of([]);

  constructor(private noticiasService: NoticasService) {}

  toggleSidebar() {
    this.isOpenSidebar = !this.isOpenSidebar;
  }

  fetchNoticias() {
    this.noticiasService.fetchNoticias();
  }

  addLike(i: number) {
    this.noticiasService.addLike(i);
  }

  getLikeTotales() {
    return this.noticiasService.getTotalLikes();
  }

  ngOnInit() {
    this.noticias$ = this.noticiasService.getNoticias();
  }
}
