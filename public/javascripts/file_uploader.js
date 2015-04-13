var FileUploader = (function () {
    function FileUploader(url) {
        this.progressControl = "";
        this.url = "";
    }
    FileUploader.prototype.queueFiles = function (files) {
        if (files.length > 0) {
        }
    };
    FileUploader.prototype.uploadFile = function (file) {
        this.progressControlContainer.append();
    };
    return FileUploader;
})();
var uploader;
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
//# sourceMappingURL=file_uploader.js.map