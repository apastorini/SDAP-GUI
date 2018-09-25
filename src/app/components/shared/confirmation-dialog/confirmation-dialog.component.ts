import { Component, Input } from '@angular/core';

@Component({
  selector: 'confirm-dialog',
  templateUrl: '/app/confirm-dialog/confirmation-dialog.html',
})
export class ConfirmationDialog {

  public confirmMessage:string;
}
