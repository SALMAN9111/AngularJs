angular.module('dataService')
    .factory('GetApiSvc', function ($http) {
        var obj = {}
        obj.getDetails = function () {
            return $http.get("https://gsmktg.azurewebsites.net:443/api/v1/techlabs/test/students")
                .then(function (resp) {
                    console.log("inside service")
                    return resp.data;

                })
        }
        //here
        return obj;
    })
    .factory('PostApiSvc', function ($http,) {
        var obj = {}
        obj.writeDetails = function (data) {
            console.log("inside post service")
            console.log("data" + data)
            $http.post("https://gsmktg.azurewebsites.net:443/api/v1/techlabs/test/students", data)
                .then(function (resp) {
                    console.log(resp)
                    console.log("inside service of post")
                    alert("Post data submitted")

                })
        
        }
        return obj;
    })
    .factory('EditApiSvc', function ($http) {
        var obj = {}
        obj.editDetails = function (data) {

            var editdata = data;
            console.log("inside put service");
            console.log("data" + data);
            $http.put("https://gsmktg.azurewebsites.net:443/api/v1/techlabs/test/students", editdata)
                .then(function (resp) {
                    console.log(resp);
                    console.log("inside service of put")
                    alert("put data submitted")

                })
        }
        return obj;
    })
























    // .factory("DeleteApiSvc", function ($http) {
    //     var obj = {}
    //     if (confirm('Are sure to delete this record')) {
    //         obj.deleteUser = function (id) {
    //             console.log("inside service");
    //             $http.delete("https://gsmktg.azurewebsites.net:443/api/v1/techlabs/test/students/" + id)
    //                 .then(function (resp) {
    //                     return resp.data
    //                 })
    //         }
    //     }
    // })
 // obj.deleteUser = function (id) {
        //     if (confirm('Are you sure to delete this record')) {
        //         $http.get("https://gsmktg.azurewebsites.net:443/api/v1/techlabs/test/students/" + id)
        //             .then(function (responce) {
        //                 console.log(responce);
        //                 alert("Data delete Succesfull");
        //             })
        //     }
        // }