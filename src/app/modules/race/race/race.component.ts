import { Component, OnInit, Input } from '@angular/core';
import { Race } from 'src/app/models/race';

@Component({
  selector: 'pr-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input('race')
  public race: Race

  constructor(
    
  ) { }

  ngOnInit(): void {
  }

}
