import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Race } from 'src/app/models/race';
import { RacesService } from '../services/races.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  birthdayCtrl: FormControl;


  constructor(
    fb: FormBuilder,
    private rService: RacesService
  ) {

    this.nameCtrl = fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(4)
      ],
      asyncValidators: [
        control => this.isRaceNameAvailable(control),
      ],
      updateOn: 'blur'
    });

    this.birthdayCtrl = fb.control('', [
      RaceFormComponent.isNotTooOld
    ]);

    this.raceForm = fb.group({
      name: this.nameCtrl,
      birthday: this.birthdayCtrl,
    });
  }

  static isNotTooOld(control: FormControl) {
    const startDate = new Date(control.value);
    startDate.setFullYear(startDate.getFullYear() + 1);
    return startDate < new Date() ? { tooOld: true } : null;
  }

  isRaceNameAvailable(control: AbstractControl): Observable<any> {
    return this.rService
      .isRaceNameAvailable(control.value)
      .pipe(
        map(available => available ? null : { alreadyUsed: true })
      )
  }


  ngOnInit(): void {
  }

  submit() {

  }
}
