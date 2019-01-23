function serverURL() {
    return "http://1705192a.projectsbit.org/glowfitness/"; // here to change DB
}


function doAJAXCall(partialLink, dataToSend, callback, callbackFailed) {

    var url = serverURL() + partialLink;

    var data = dataToSend;
    $.ajax({
        url: url,
        type: 'GET',
        data: data,
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function (arr) {
            callback(arr);
            return "Success";
        },
        error: function (arr) {
            callbackFailed(arr);
            return "Failed";
        }
    });

}