import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListEmployeeResponse } from '../../models/responses/Employee/get-list-employee-response';
import { GetByIdEmployeeResponse } from '../../models/responses/Employee/get-by-id-employee-response';

@Injectable()
export abstract class EmployeeBaseService {

  abstract getList():
  Observable<GetListEmployeeResponse[]>;
  abstract getById():
  Observable<GetByIdEmployeeResponse>;
}