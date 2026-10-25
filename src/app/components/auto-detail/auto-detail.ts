
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auto } from '../../interface/auto';

@Component({
  imports: [],
  selector: 'app-auto-detail',
  styleUrl: './auto-detail.css',
  templateUrl: './auto-detail.html',
})
export class AutoDetail {
  @Input() auto!: Auto
  @Output() onBack = new EventEmitter<void>()

  back() {
    this.onBack.emit()
  }
}