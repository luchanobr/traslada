import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-likes-totales',
  templateUrl: './likes-totales.component.html',
  styleUrls: ['./likes-totales.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikesTotalesComponent {
  @Input() likeTotales$: Observable<number> | null = null;

  constructor() {}
}
