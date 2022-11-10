import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IFormValues } from '../../models/qr-form-value.interface';
import { QrService } from '../../services/qr.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnDestroy {

  qrValueString: string = '';
  private destroy$: Subject<void> = new Subject<void>();

  constructor(private qrServive: QrService) { }

  generateQr(formValue: IFormValues) {
    this.qrValueString = formValue.qrvalue;
  }

  downloadQRCode() {
    const canvas = document.querySelector("canvas")
    if (canvas) {
      const base64Img = canvas.toDataURL();
      this.qrServive.getBase64Img(base64Img)
        .pipe(takeUntil(this.destroy$))
        .subscribe(blob => {
          this.downloadFile(blob);
        });
    }
  }
  
  
  private downloadFile(blob: any) {

    const fileNameToDownload = 'qr_image'
    if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) { //IE
      (window.navigator as any).msSaveOrOpenBlob(blob, fileNameToDownload);
    } else { // chrome

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileNameToDownload;
      link.click();
    }

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

