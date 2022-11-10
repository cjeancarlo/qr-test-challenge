import { Injectable } from '@angular/core';
import { from, Observable, switchMap } from 'rxjs';

@Injectable()
export class QrService {

  constructor() { }

public getBase64Img(base64Img :any) : Observable<any> {
  
  return from(fetch(base64Img))
  .pipe(
    switchMap(res => from(res.blob())),
  );
}

}
