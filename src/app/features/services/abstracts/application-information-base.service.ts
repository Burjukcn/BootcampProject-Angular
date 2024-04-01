import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListApplicationInformationResponse } from '../../models/responses/ApplicationInformation/get-list-application-information-response';
import { GetByIdApplicationInformationResponse } from '../../models/responses/ApplicationInformation/get-by-id-application-information-response';

@Injectable({
  providedIn: 'root'
})
export abstract class ApplicationInformationBaseService {

  abstract getList():
  Observable<GetListApplicationInformationResponse[]>;

  abstract getById(): 
  Observable<GetByIdApplicationInformationResponse>;
}