import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}
  users() {
    return [
      {
        name: 'Samuel',
        age: 21,
        email: 'Samuel@wsxqa',
      },
      {
        name: 'Matteo',
        age: 21,
        email: 'matteo@wsxqa',
      },
      {
        name: 'Alex',
        age: 21,
        email: 'alex@wsxqa',
      },
    ];
  }
}
