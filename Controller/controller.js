var app = angular.module('myApp', ["ngDragToReorder"]);
app.controller('forCtrl', function($scope) {
    var element = document.getElementById("sortable");
    $scope.array = [];
    $scope.result = 0;
    $scope.success = 0;
    $scope.class = undefined;
    $scope.MyChange = function() {
        var Input = $scope.value + 1;
        if ($scope.class)
            element.classList.remove($scope.class);
        $scope.class = 'col-md-' + Input;
        element.classList.add($scope.class);
        var message = ("Welcome to team");
        $scope.array = [];
        for (var i = 1; i <= ($scope.value * $scope.value); i++) {
            $scope.array.push(i);
        }
        //Change the  number position of every time 
        $scope.arrays = shuffle($scope.array)
        for (i = 0; i < $scope.arrays.length; i++) {
            if ($scope.array[i] == (i + 1)) {
                $scope.result++;
            }
        }
    };

    function shuffle(a) {
        for (var j, x, i = a.length; i; j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x);
        return a;
    }
    $scope.$on('dragToReorder.dropped', function(evt, data) {
        // var b = arr[1];
        // arr[1] = arr[2];
        // arr[1] = b;
        $scope;
        var b = $scope.array[data.newIndex];
        $scope.array[data.newIndex] = $scope.array[data.prevIndex];
        $scope.array[data.prevIndex] = b;
        // console.log(data.list)
        var total = 0;
        for (i = 0; i < $scope.array.length; i++) {
            if ($scope.array[i] == (i + 1)) {
                total++;
            }
        }
        if (total == $scope.array.length) {
            toastr.success("Welcome To Team", "Success", { timeOut: 1500 })
        } else {
            // toastr.error("Welcome To Team", "Success", { timeOut: 2000 })

        }

    });
});