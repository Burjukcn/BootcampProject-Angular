import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListBootcampStateResponse } from '../../models/responses/BootcampState/get-list-bootcamp-state-response';
import { GetByIdBootcampStateResponse } from '../../models/responses/BootcampState/get-by-id-bootcamp-state-response';

@Injectable()
export abstract class BootcampStateBaseService {

  abstract getList():
  Observable<GetListBootcampStateResponse[]>;
  abstract getById():
  Observable<GetByIdBootcampStateResponse>;
}