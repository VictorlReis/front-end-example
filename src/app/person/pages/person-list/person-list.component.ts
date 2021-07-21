import { PersonDto } from './../../services/person.model';
import { PersonService } from './../../services/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  responsePersons: PersonDto[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getPersons()
    .subscribe(res => {
      this.responsePersons = res
    });
  }


}
