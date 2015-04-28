/// <reference path="../../typings/jquery/jquery.d.ts" />

class FileUploader
{
    private fileQueue: Array<File>;
    private url: string;
    private progressControlContainer: JQuery;
    //private isExecuting: boolean;

    constructor(url)
    {
        this.progressControl = "";
        this.url = url;
        this.fileQueue = [];
        setTimeout(this.queueDealerAsync, 1000);
    }
    public queueFiles(files)
    {
        if (files.length > 0)
        {
            for(var i = 0; i < files.length; i++)
                this.fileQueue.push(files[i]);
        }
    }
    private queueDealerAsync()
    {
        this.fileQueue.forEach(
            function(e)
            {
                console.log(e);
            }
        );
        setTimeout(this.queueDealerAsync, 1000);
    }
    private uploadFile(file: File)
    {

        this.progressControlContainer.append()
    }
}

var uploader: FileUploader;

$(document).ready(function () {
    var sel = $(".file-drag-drop");
   // sel.bind('dragover', function (e) {
   //     console.log(e);
   // });
    $(document).on('dragenter', function (e) { e.stopPropagation(); e.preventDefault(); });
    $(document).on('dragover', function (e) { e.stopPropagation(); e.preventDefault(); });
    $(document).on('drop', function (e) { e.stopPropagation(); e.preventDefault(); });
    uploader = new FileUploader('http://localhost:3000/upload');
    sel.on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
        uploader.queueFiles(files);
        return false;
    });

});