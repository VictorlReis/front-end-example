import { IRestApiCall } from './../../provider/RestApiProvider';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PersonDto, PersonPhoneDto, PersonPhoneUpdateRequest } from './person.model';
import { RestApiProvider } from 'src/app/provider/RestApiProvider';

const baseUrl = "http://localhost:5000/api/Person";

@Injectable({
  providedIn: 'root'
})


export class PersonService {


  constructor(private httpProvider: RestApiProvider ) { }

  getPersons(): Observable<PersonDto[]> {
    const request: IRestApiCall = {
      baseUrl,
      endpoint: '/Person'
    }
    return this.httpProvider.get(request).pipe(map(x => x.data.personObjects));
  }

  getPersonsPhone(businessEntityID: number): Observable<PersonPhoneDto[]> {
    const request: IRestApiCall = {
      baseUrl,
      endpoint: '/PersonPhone',
      queryParams: {
        businessEntityID
      }
    }
    return this.httpProvider.get(request).pipe(map(x => x.data.personPhoneObjects));
  }

  updatePersonPhone(personPhoneUpdateRequest:PersonPhoneUpdateRequest)  {
    return this.httpProvider.put(`${baseUrl}/PersonPhone`, personPhoneUpdateRequest);
  }

  createPersonPhone(personPhoneDto:PersonPhoneDto)  {
    return this.httpProvider.post(`${baseUrl}/PersonPhone`, personPhoneDto);
  }

  deletePersonPhone(phoneNumber:string) {
    return this.httpProvider.delete(`${baseUrl}/PersonPhone/${phoneNumber}`);
  }

}
