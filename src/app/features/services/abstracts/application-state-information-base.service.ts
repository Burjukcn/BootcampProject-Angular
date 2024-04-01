import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListApplicationStateInformationResponse } from '../../models/responses/ApplicationstateInformation/get-list-application-state-information-response';
import { GetByIdApplicationStateInformationResponse } from '../../models/responses/ApplicationstateInformation/get-by-id-application-state-information-response';

@Injectable()

export abstract class ApplicationStateInformationBaseService {

  abstract getList():
  Observable<GetListApplicationStateInformationResponse[]>;
  abstract getById():
  Observable<GetByIdApplicationStateInformationResponse>;
}