app.controller('Controller', function ($scope, ItemService, $http, $rootScope, $window, $location) {

//===========Listing Code==================
    $http.get(ItemService.getApiURL())
        .then(function (data, status, headers, config) {

            $scope.todoItems = data;

        }).catch(function (data, status, headers, config) {
            alert(data);
        });




    $scope.add = function () {
        $location.url('/add');
    }

    $scope.editMe = function (todoItem) {
        ItemService.setData(todoItem);

        $location.url('/edit');
    }

    $scope.deleteMe = function (todoItem) {
        ItemService.setData(todoItem);
        $location.url('/delete');

    }

//===========Listing Code==================



//===========Add Code==================
    $scope.addSubmit = function () {
        if ($scope.AddName) {
            var item = {
                "Name": $scope.AddName,
                "IsComplete": $scope.AddIsComplete
            }
            $http.post(ItemService.getApiURL(), item)
                .then(function (data, status, headers, config) {
                    alert('New Item Created!');
                $location.url('/');
                })
                .catch(function (data, status, headers, config) {
                    alert(data);
                });
        }
		
		

    }
//===========Add Code==================	
	
	
	//===========Edit Code==================
	    var item = ItemService.getData();
    $scope.EditKey = item.key;
    $scope.EditName = item.name;
    $scope.EditIsComplete = item.isComplete;
	    $scope.editSubmit = function () {
        if ($scope.EditName) {
            var key = $scope.EditKey;
            console.log(item);
            var item = {
                "Key": key,
                "Name": $scope.EditName,
                "IsComplete": $scope.EditIsComplete
            }
            $http.put(ItemService.getApiURL() + key, item)
                .then(function (data, status, headers, config) {

                    alert('Item has been Edited!');
                    $location.url('/');

                })
                .catch(function (data, status, headers, config) {
                    alert(data);
                });
        }
    }
//===========Edit Code==================	
	
	//===========Delete Code==================
	$scope.item = ItemService.getData();
	    $scope.deleteSubmit = function () {
        $http.delete(ItemService.getApiURL() + $scope.item.key)
                         .then(function (data, status, headers, config) {
                             alert('Item Deleted!');
                             $location.url('/');
                         })
                         .catch(function (data, status, headers, config) {
                             alert(data);
                         });

    }
	//===========Delete Code==================

	//===========Cancel Code==================	
	    $scope.cancel = function () {
        $location.url('/');
    }
	//===========Cancel Code==================	
});




