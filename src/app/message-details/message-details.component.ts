import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Message } from '../data.model';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss'],
})
export class MessageDetailsComponent {
  @Input()
  message: Message | null = null;

  @Input()
  index: number | null = null;

  @Output()
  delete: EventEmitter<number> = new EventEmitter();

  onDelete() {
    this.delete.emit(this.index!);
  }
}
