class FileUploader
{
    private fileQueue: FileList;
    private url: string;
    private progressControlContainer: JQuery;
    constructor(url)
    {
        this.progressControl = "";
        this.url = "";
    }
    queueFiles(files)
    {
        if (files.length > 0)
        {

        }
    }
    private uploadFile(file: File)
    {

        this.progressControlContainer.append()
    }
}

var uploader: FileUploader;

$(document).ready(function () {
    var sel = $(".file-drag-drop");
    sel.bind('dragover', function (e) {
        console.log(e);
    });
    $(document).on('dragenter', function (e) { e.stopPropagation(); e.preventDefault(); });
    $(document).on('dragover', function (e) { e.stopPropagation(); e.preventDefault(); });
    $(document).on('drop', function (e) { e.stopPropagation(); e.preventDefault(); });

    sel.on('drop', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.originalEvent.dataTransfer.files;
        FileUploader.queueFiles(files);
        return false;
    });

});