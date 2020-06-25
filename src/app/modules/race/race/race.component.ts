import { Component, OnInit, Input } from '@angular/core';
import { Race } from 'src/app/models/race';
import { Router } from '@angular/router';

@Component({
  selector: 'pr-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input('race')
  public race: Race

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public showDetails() {
    this.router.navigate(['/raceslist', this.race.id])
  }

}
