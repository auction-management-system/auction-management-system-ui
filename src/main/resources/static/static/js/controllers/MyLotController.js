/**
 * Created by Yurii on 18.04.2017.
 */
/**
 * Created by Yurii on 02.04.2017.
 */



app.controller('myLotController', function ($rootScope, $scope, $location,$http) {

    var url = 'http://localhost:8060';

    $scope.lots=[];
    //
    // $scope.name = undefined;
    // $scope.topic = undefined;
    // $scope.description = undefined;
    // $scope.price = undefined;
    // $scope.endDate = undefined;
    //
    // $scope.canProceed = true;

    $http.get(url+'/myLots').success(function (data) {
        $scope.lots=data;
    })


    // $scope.removeTask = function (id) {
    //     problemService.removeTask(id)
    // };


    // $scope.addLot = function () {
    //
    //     return $http.post(url+'/addLot',
    //         {
    //             name: $scope.name,
    //             topic: $scope.topic,
    //             description : $scope.description,
    //             price : $scope.price,
    //             endDate : $scope.endDate
    //         })
    //         .then(function (response) {
    //             $location.path("/myLots");
    //         }).catch(function (response) {
    //             $scope.canProceed = false;
    //         })
    // };



    // $scope.editMode = false;
    // $scope.searchable = undefined;
    //
    // $scope.search = function (searchable) {
    //     problemService.searchForTask(searchable).then(function (response) {
    //             $scope.tasks = response.data;
    //             if($scope.tasks.length == 0)
    //                 $scope.message = "EMPTY";
    //         },
    //         function () {
    //             problemService.getTasks().then(function (response){
    //                 $scope.tasks = response.data;
    //             });
    //         })
    // };
    //
    // $scope.updateTask = function (task) {
    //     problemService.updateTask(task.id, task.name, task.level, task.maxScore, task.description);
    // };
    //
    // $scope.changeEditMode = function () {
    //     $scope.editMode = !$scope.editMode;
    // }
});

