import { CanMatchFn } from '@angular/router';

export const matchGuard: CanMatchFn = (route, state) => {
  if (sessionStorage.getItem('number')) {
    return true;
  }
  return false;
};
