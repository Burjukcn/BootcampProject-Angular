import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListBootcampImageResponse } from '../../models/responses/BootcampImage/get-list-bootcamp-image-response';
import { GetByIdBootcampImageResponse } from '../../models/responses/BootcampImage/get-by-id-bootcamp-image-response';

@Injectable()

export abstract class BootcampImageBaseService {

  abstract getList():
  Observable<GetListBootcampImageResponse[]>;
  abstract getById(): 
  Observable<GetByIdBootcampImageResponse>;
}