import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IFormValues } from '../../models/qr-form-value.interface';

@Component({
  selector: 'app-qr-form',
  templateUrl: './qr-form.component.html',
  styleUrls: ['./qr-form.component.scss']
})
export class QrFormComponent implements OnInit, OnDestroy {

  qrForm!: FormGroup;
  @Output() formValuesChangesEmitter: EventEmitter<IFormValues> = new EventEmitter();


  private destroy$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.intForm();
  }

  submitFormChanges() {
    this.formValuesChangesEmitter.next(this.qrForm.value);
  }

  private intForm() {
    this.qrForm = this.fb.group({
      qrvalue: ['HELLO WORLD', Validators.required]
    });

    this.submitFormChanges();

    this.qrForm.valueChanges.pipe(
        takeUntil(this.destroy$))
        .subscribe((form: IFormValues) => {
          this.submitFormChanges();
    }
    )
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
