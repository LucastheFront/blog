import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BaseHttpService } from '@core/api/base-http.service';

@Component({
    selector: 'bg-new-post-dialog',
    templateUrl: './new-post.dialog.html',
    styleUrls: ['./new-post.dialog.scss']
})
export class NewPostDialog {
    public labelText = 'Add a picture';
    public newPostForm: FormGroup;
    public picture: File;

    constructor(public dialogRef: MatDialogRef<NewPostDialog>,
                iconRegistry: MatIconRegistry,
                sanitizer: DomSanitizer,
                private httpService: BaseHttpService,
                fb: FormBuilder) {
        iconRegistry.addSvgIcon(
            'upload-image',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/upload-image.svg')
        );

        this.newPostForm = fb.group({
            image: ['', Validators.required],
            title: ['', Validators.required],
            article: ['', Validators.required],
            author: ['', Validators.required],
        });
    }

    getFileName(event: any): string {
        if (event && event.target.files) {
            this.picture = event.target.files[0];
            this.labelText = this.picture.name;
        }

        return;
    }

    onSubmit(): void {
        const formData = new FormData();
        formData.append('image', this.picture);
        formData.append('title', this.newPostForm.get('title').value);
        formData.append('article', this.newPostForm.get('article').value);
        formData.append('author', this.newPostForm.get('author').value);

        this.httpService.createPost(formData).subscribe(
            response => this.dialogRef.close(),
            error => console.log(error)
        );
    }

}
