import { Component, Input } from '@angular/core';

@Component({
  selector: 'eds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
}