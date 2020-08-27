import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { PostService } from '@business/posts/services/posts.service';

@Component({
    selector: 'bg-new-post-dialog',
    templateUrl: './new-post.dialog.html',
    styleUrls: ['./new-post.dialog.scss']
})
export class NewPostDialog {
    public labelText = 'Add a picture';
    public newPostForm: FormGroup;
    private picture: File;

    constructor(
        private dialogRef: MatDialogRef<NewPostDialog>,
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
        private httpService: PostService,
        private fb: FormBuilder
    ) {
        iconRegistry.addSvgIcon(
            'upload-image',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/upload-image.svg')
        );

        this.newPostForm = this.fb.group({
            image: ['', Validators.required],
            title: ['', Validators.required],
            article: ['', Validators.required],
            author: ['', Validators.required],
        });
    }

    private createPost(data: FormData): void {
        this.httpService.createPost(data).subscribe(
            response => this.dialogRef.close(),
            error => console.log(error)
        );
    }

    public getFileName(event: any): string {
        if (event && event.target.files) {
            this.picture = event.target.files[0];
            this.labelText = this.picture.name;
        }

        return;
    }

    public onSubmit(): void {
        const formData = new FormData();
        formData.append('image', this.picture);
        formData.append('title', this.newPostForm.get('title').value);
        formData.append('article', this.newPostForm.get('article').value);
        formData.append('author', this.newPostForm.get('author').value);

        this.createPost(formData);
    }

}
