import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'bg-new-post-dialog',
    templateUrl: './new-post.dialog.html',
    styleUrls: ['./new-post.dialog.scss']
})
export class NewPostDialog {
    public addPicture = 'Add a picture';

    constructor(public dialogRef: MatDialogRef<NewPostDialog>, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'upload-image',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/upload-image.svg')
        );
    }

    getFileName(event): any {
        if (event && event.target.files) {
            this.addPicture = event.target.files[0].name;
        }

        return;
    }

    onClose(): void {
        this.dialogRef.close();
    }

    onSubmit(form: NgForm): void {
        console.log(form.value);
    }

}
