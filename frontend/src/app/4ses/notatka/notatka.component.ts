import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'notatka',
  templateUrl: './notatka.component.html',
  styleUrls: ['./notatka.component.scss']
})
export class NotatkaComponent implements OnInit {
  @Input() email: string = '';
  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() url: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
