/**
 * Created by moran on 05/06/14.
 */

var embedlyModule = angular.module('embedlyModule2', ['angular-embedly']);

embedlyModule.config(function(embedlyServiceProvider){
    embedlyServiceProvider.setKey('your key');
});

function embedCtrl2($scope) {
    $scope.urlToSearch = '';
}