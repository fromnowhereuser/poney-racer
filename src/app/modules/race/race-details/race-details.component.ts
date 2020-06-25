import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Race } from 'src/app/models/race';

@Component({
  selector: 'pr-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  public race: Race;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.race = data['race']);
  }
}
