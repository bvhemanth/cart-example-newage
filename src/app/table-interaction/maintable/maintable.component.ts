import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-maintable',
  templateUrl: './maintable.component.html',
  styleUrls: ['./maintable.component.scss']
})
export class MaintableComponent implements OnInit {

  @Input() otableDatatochild;

  constructor() { }

  ngOnInit(): void {
  }

}
