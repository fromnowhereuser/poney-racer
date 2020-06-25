import { Component, OnInit } from '@angular/core';
import { Race } from 'src/app/models/race';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pr-races-list',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit {

  public races: Array<Race>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.races = data['races']);
  }

}
