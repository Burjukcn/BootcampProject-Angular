import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListBlacklistResponse } from '../../models/responses/Blacklist/get-list-blacklist-response';
import { GetByIdBlacklistResponse } from '../../models/responses/Blacklist/get-by-id-blacklist-response';

@Injectable()

export abstract class BlacklistBaseService {

  abstract getList():
  Observable<GetListBlacklistResponse[]>;
  abstract getById():
  Observable<GetByIdBlacklistResponse>;
}