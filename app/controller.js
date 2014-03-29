var app = angular.module('App', ['leaflet-directive', 'ngRoute']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/overview', {
				templateUrl: 'app/farms.html',
				controller: 'FarmsListCtrl'
			}).
			when('/report', {
				templateUrl: 'app/report.html',
				controller: 'ReportCtrl'
			}).
			otherwise({
				redirectTo: '/overview'
			});
  }]);

app.controller('mainCtrl', function($scope, $location) {
	$scope.getClass = function(path) {
	if ($location.path().substr(0, path.length) == path) {
		return "active"
	} else {
		return ""
	}
	}
});

app.controller('ReportCtrl', ['$scope', '$http', function($scope, $http) {

	var icons = {
		fish_icon: {
			iconUrl: 'fishIcon.fw.png',
			iconSize:     [60, 69], // size of the icon
			iconAnchor:   [30, 69], // point of the icon which will correspond to marker's location
			popupAnchor:  [-60, -0] // point from which the popup should open relative to the iconAnchor
		}
	};
	angular.extend($scope, {
		center: {
			lat: 60.39,
			lng: 5.32,
			zoom: 4
		},
        events: {
            map: {
                enable: ['click', 'dragend'],
                logic: 'emit'
            }
        },
        incidentMarker: [
			{
				lat: 59.91,
				lng: 10.75,
				message: "Drag to or click area of incident",
				focus: true,
				draggable: true,
			}
		],
		image: {},
		fishType: "Salmon"
	});
	var self = this;
	$scope.$on('leafletDirectiveMap.click', function(event, leafletEvent){
		$scope.incidentMarker = [{
			lat: leafletEvent.leafletEvent.latlng.lat,
			lng: leafletEvent.leafletEvent.latlng.lng, 
			draggable: true
		}]
    });

    $scope.report = function() {

    }
}]);

app.controller('FarmsListCtrl', [ '$scope', '$http', function($scope, $http) {
	var icons = {
		fish_icon: {
			iconUrl: 'fishIcon.fw.png',
			iconSize:     [60, 69], // size of the icon
			iconAnchor:   [30, 69], // point of the icon which will correspond to marker's location
			popupAnchor:  [-60, -0] // point from which the popup should open relative to the iconAnchor
		}
	};

	angular.extend($scope, {
		center: {
			lat: 60.39,
			lng: 5.32,
			zoom: 4
		},
		aquafarms: [
			{
				lat: 59.91,
				lng: 10.75,
				message: "Aquaculture farm",
				focus: false,
				draggable: false,
				icon: icons.fish_icon
			}
		],
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        }
	});

	$scope.$on('leafletDirectiveMap.click', function(event, leafletEvent){
        console.log(leafletEvent.leafletEvent.latlng);

    });

	$scope.pointers = {}

	// var responsePromise = $http.get("/angularjs-examples/json-test-data.jsp");

	// responsePromise.success(function(data, status, headers, config) {
	// 	$scope.myData.fromServer = data.title;
	// });

	// responsePromise.error(function(data, status, headers, config) {
	// 	alert("AJAX failed!");
	// });

}]);