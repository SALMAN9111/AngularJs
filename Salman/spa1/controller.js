angular.module('dataService')
    .controller('GetStudentData', function ($scope, GetApiSvc, $http) {
        GetApiSvc.getDetails().then(function (data) {
            console.log(data);
            $scope.students = data;
        })

        $scope.Delete = function (id) {
            if (confirm('Are you sure to delete this record ?')) {
                $http.delete("https://gsmktg.azurewebsites.net:443/api/v1/techlabs/test/students/" + id)
                    .then((response) => {
                        alert("Data deleted successfully")
                        GetApiSvc.getDetails().then(function (data) {
                            console.log(data);
                            $scope.students = data;
                        })

                    })
            }
        }
    })
    .controller('AddStudentData', function ($scope, PostApiSvc) {
        $scope.students = {};
        var data = $scope.students;
        $scope.postData = function () {
            console.log("post clicked")
            PostApiSvc.writeDetails(data)
                // .then(function (_response) {
                    // console.log(data);
                    // console.log("Inside postCtrl")
                    // $scope.students = data;
                // })
            console.log("End of post Controller")
            // $scope.clearField();
        }

    //     function clear() {
    //         $scope.students.rollNo = "";
    //         $scope.students.name = "";
    //         $scope.students.age = "";
    //         $scope.students.email = "";
    //         $scope.students.date = "";
    //         $scope.students.isMale = "";
    //     }
    })
    .controller('EditStudentData', function ($scope, EditApiSvc) {
        // $scope.students = {};


        var data = $scope.students;
        $scope.editData = function () {
            console.log("post clicked")
            // $scopelksdjkls.flkj ;
            // var data = $scope.student
            EditApiSvc.editDetails(data)
            console.log("End of post Controller")
            $scope.clearField();
        }

        $scope.clearField = function () {
            $scope.students.rollNo = "";
            $scope.students.name = "";
            $scope.students.age = "";
            $scope.students.email = "";
            $scope.students.date = "";
            $scope.students.isMale = "";

        }

    })






























    // .controller('DeleteCtrl', function ($scope, DeleteApiSvc) {
    //     var id = $scope.students.id
    //     // $scope.id =
    //         $scope.Delete = function () {
    //             console.log("Delete clicked "+id)
    //             DeleteApiSvc.deleteUser(id)
    //             // .then(function (_response) {
    //             // console.log(data);
    //             // console.log("Inside postCtrl")
    //             // $scope.students = data;
    //             // })
    //             console.log("End of delete Controller")
    //         }
    // })





