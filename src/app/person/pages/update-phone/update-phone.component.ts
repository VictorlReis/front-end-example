import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonPhoneDto, PersonPhoneUpdateRequest } from '../../services/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css']
})
export class UpdatePhoneComponent implements OnInit {

  subscription: Subscription;

  oldNumber:string;
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
      this.oldNumber = params['number'];
      this.personPhoneRequest.phoneNumber = this.oldNumber;
      this.personPhoneRequest.phoneNumberTypeID = params['type'];
    });
  }

  updatePhone() {
    const updateRequest: PersonPhoneUpdateRequest = {
      businessEntityID: this.personPhoneRequest.businessEntityID,
      phoneNumber: this.personPhoneRequest.phoneNumber,
      oldPhoneNumber: this.oldNumber,
      phoneNumberTypeID: this.personPhoneRequest.phoneNumberTypeID
    }
    this.personService.updatePersonPhone(updateRequest).subscribe(res => {
        if(res.success) alert('Phone number updated!');

        this.router.navigate(['/phones', this.personPhoneRequest.businessEntityID])

    })
  }
}
