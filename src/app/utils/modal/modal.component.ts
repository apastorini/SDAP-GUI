import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {
  @Input() text = ``;
  @Input() type = ``;
  @Input() title = ``;
  @Input() action = ``;


  constructor(
    public activeModal: NgbActiveModal,
  )
   {
   }

  closeModal() {
  this.activeModal.close('Modal Closed');
}

  ngOnInit() {
  }

}
