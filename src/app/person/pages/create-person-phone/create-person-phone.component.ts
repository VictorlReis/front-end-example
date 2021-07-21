import { PersonDto, PersonPhoneDto } from './../../services/person.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonService } from '../../services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-person-phone',
  templateUrl: './create-person-phone.component.html',
  styleUrls: ['./create-person-phone.component.css']
})
export class CreatePersonPhoneComponent implements OnInit {

  subscription: Subscription

  personPhoneRequest: PersonPhoneDto = {
    businessEntityID: 0,
    phoneNumber: '',
    phoneNumberTypeID: 0
  }

  constructor(private route: ActivatedRoute,
    private personService: PersonService,
    private router:Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params:any) => {
      this.personPhoneRequest.businessEntityID = params['id'];
    });
  }

  createPhone() {
    this.personService.createPersonPhone(this.personPhoneRequest).subscribe(res => {
        if(res.success) alert('Phone number created!');

        this.router.navigate(['/phones', this.personPhoneRequest.businessEntityID])
    })
  }

}
