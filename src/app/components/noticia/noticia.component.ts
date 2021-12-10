import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { Noticia } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticiaComponent {
  @Input() noticia: Noticia | null = null;
  @Output() like = new EventEmitter<void>();
  constructor() {}

  handlerLike() {
    this.like.emit();
  }
}
