import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonPhoneDto } from '../../services/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-phone-list',
  templateUrl: './person-phone-list.component.html',
  styleUrls: ['./person-phone-list.component.css']
})
export class PersonPhoneListComponent implements OnInit {

  subscription: Subscription
  businessEntityID:number;
  phones:PersonPhoneDto[];

  constructor(private route: ActivatedRoute,
    private personService: PersonService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params:any) => {
      this.businessEntityID = params['id'];
    });
    this.personService.getPersonsPhone(this.businessEntityID).subscribe(res => {
      this.phones = res
      console.log(this.phones);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  deletePhone(phoneNumber: string) {
    this.personService.deletePersonPhone(phoneNumber).subscribe(res => {
      if(res.success) {
        alert('Phone removed!');
        window.location.reload();
      }
    })
  }

}
