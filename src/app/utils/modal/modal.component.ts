import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  //@Input() title = `Information`;
  @Input() text = ``;
  @Input() type = ``;
  @Input() title = ``;


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
