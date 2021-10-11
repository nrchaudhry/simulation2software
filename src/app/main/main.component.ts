import { Component, OnInit } from '@angular/core';
import { UploadfileService } from '../services/uploadfile.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    file: File = null; // Variable to store file
    password = null;
    package = null;
    username = null;
    port = null;
    server = null;
    constructor(
        private fileUploadService: UploadfileService,
        private toastrservice: ToastrService
    ) { }

    ngOnInit(): void {
    }

    onChange(event) {
        this.file = event.target.files[0];
    }

    // OnClick of button Upload
    onUpload() {
        console.log(this.file);
        this.fileUploadService.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
                    console.log(event);
                    this.toastrservice.success("Success", "File Successfully Added");
                }
            }
        );
    }
}
