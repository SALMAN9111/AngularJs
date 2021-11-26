angular.module('dataService', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/get", {
            controller: "GetStudentData",
            templateUrl: "fragements/getStudent.html"
        })
        .when("/post", {
            controller: "AddStudentData",
            templateUrl: "fragements/addStudent.html"
        })
        .when("/edit",{
            controller: "EditStudentData",
            templateUrl: "fragements/editStudent.html"
        })
       

        // .when("/", {
        //     controller: "GetCtrl",
        //     templateUrl: "fragements/get.html"
        // })
    })

















 // .when("/delete", {
        //     controller: "DeleteCtrl",
        //     templateUrl: "fragements/delete.html"
        // })