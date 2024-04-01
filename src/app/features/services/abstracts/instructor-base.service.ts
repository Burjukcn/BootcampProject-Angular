import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListInstructorResponse } from '../../models/responses/Instructor/get-list-instructor-response';
import { GetByIdInstructorResponse } from '../../models/responses/Instructor/get-by-id-instructor-response';

@Injectable()
export abstract class InstructorBaseService {

  abstract getList():
  Observable<GetListInstructorResponse[]>;
  abstract getById():
  Observable<GetByIdInstructorResponse>;
}