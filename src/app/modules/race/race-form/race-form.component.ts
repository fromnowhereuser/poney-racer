import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Race } from 'src/app/models/race';

@Component({
  selector: 'pr-race-form',
  templateUrl: './race-form.component.html',
  styleUrls: ['./race-form.component.css']
})
export class RaceFormComponent implements OnInit {


  @Output('racecreate')
  racecreate = new EventEmitter<Race>();

  raceForm: FormGroup;
  nameCtrl: FormControl;


  constructor(fb: FormBuilder) {

    this.nameCtrl = fb.control('', [
      Validators.required,
      Validators.minLength(4)
    ]);


    this.raceForm = fb.group({
      name: this.nameCtrl,
    });
  }

  ngOnInit(): void {
  }

  submit() {

  }
}
