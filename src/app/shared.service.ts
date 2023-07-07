import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public login = true;
  public child = true;

  constructor() {}
}
