/// <reference path="../../typings/jquery/jquery.d.ts" />
/*
Author: CherryLemon
File: file_uploader.ts
Description:
This is a HTML5 file uploading control
 */

class FileUploader {
    private fileQueue:Array<File>;
    private url:string;
    private progressControlContainer:JQuery;
    private isUploading:boolean;
    private numOfFileUploading:number;
    private maxFileUploads:number;
    private progressControl: string;
    //private isExecuting: boolean;

    constructor(url)
    {
        this.progressControl = "";
        this.url = url;
        this.fileQueue = [];
        this.isUploading = false;
        this.numOfFileUploading = 0;
        // Maximum 3 files can be uploaded simultaneously
        this.maxFileUploads = 3;
        var _this = this;
        //FileUploader.uploader = this;
        setTimeout(function () {
            _this.queueDealerAsync();
        }, 1000);
        this.progressControl = '<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>';
    }

    public queueFiles(files) {
        if (files.length > 0) {
            for (var i = 0; i < files.length; i++)
                this.fileQueue.push(files[i]);
            if (!this.isUploading) {
                var _this = this;
                setTimeout(function () {
                    _this.queueDealerAsync();
                }, 0);
            }
        }
    }

    private queueDealerAsync() {
        this.isUploading = true;
        while (this.fileQueue.length > 0) {
            var file = this.fileQueue.shift();
            this.uploadFile(file);
            this.numOfFileUploading++;
            if (this.numOfFileUploading >= this.maxFileUploads)
                return;
        }
        this.isUploading = false;
    }

    private uploadFile(file:File) {

        --this.numOfFileUploading;
        var _this = this;
        setTimeout(function () {
            _this.queueDealerAsync();
        }, 0);
    }
}

$(document).ready(function () {
    var sel = $(".file-drag-drop");
    // sel.bind('dragover', function (e) {
    //     console.log(e);
    // });
    $(document).on('dragenter', function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    $(document).on('dragover', function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    $(document).on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
    });
    var uploader = new FileUploader('http://localhost:3000/upload');
    sel.on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
        uploader.queueFiles(files);
        return false;
    });

});