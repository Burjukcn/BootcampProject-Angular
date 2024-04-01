import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListApplicantResponse } from '../../models/responses/Applicant/get-list-applicant-response';
import { GetByIdApplicantResponse } from '../../models/responses/Applicant/get-by-id-applicant-response';

@Injectable()
  
export abstract class ApplicantBaseService {

  abstract getList(): 
  Observable<GetListApplicantResponse[]>;

  abstract getById(): 
  Observable<GetByIdApplicantResponse>;
}