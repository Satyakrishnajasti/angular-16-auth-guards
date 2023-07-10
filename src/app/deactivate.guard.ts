import { CanDeactivateFn } from '@angular/router';

export const deactivateGuard: CanDeactivateFn<unknown> = (
  component: any,
  currentRoute: any,
  currentState: any,
  nextState: any
) => {
  debugger;
  console.log(component?.name);
  if (component && component?.details?.value?.name && component?.details.dirty) {
    const confir = confirm('You have unsaved  Are you sure go back ?');

    if (confir) {
      return true;
    } else {
      return false;
    }
  }

  return true;
};
