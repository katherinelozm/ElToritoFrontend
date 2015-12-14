angular.module('ElTorito.Controllers')
    .controller('HomeController', ['$scope', '$rootScope', '$sessionStorage', 'HomeService', '$state', function($scope, $rootScope, $sessionStorage, HomeService, $state) {
        $scope.user = {};
        $scope.$sessionStorage = $sessionStorage;

        $scope.logout = function() {
            HomeService.Logout().then(function(response) {
                alert('Logged out correctly');
                $sessionStorage.$reset();
            }).catch(function(err) {
                alert(err.data.error + " " + err.data.message);
            })
        }

        $scope.login = function(user) {
            HomeService.Login(user).then(function(response) {
                $sessionStorage.currentUser = response.data;
                $scope.user = {};
                $state.go('client')
            }).catch(function(err) {
                alert(err.data.error + " " + err.data.message);
            });
        }

        $scope.register = function() {
            var user = {
                name: $scope.user.name,
                email: $scope.user.email,
                number: $scope.user.number,
                password: $scope.user.password,
                scope: ['client']
            };
            HomeService.Register(user).then(function(response) {
                alert('Registered in correctly!');
                $scope.login({
                    email: user.email,
                    password: user.password
                });
                $state.go('client')
            }).catch(function(err) {
                console.log(err);
                alert(err.data.error + " " + err.data.message);
            });
        }

        $scope.quoteRequest = function() {
            var quote = {
                client: $scope.quote.client,
                company: $scope.quote.company,
                email: $scope.user.email,
                quantity: $scope.quote.quantity,
                eventType: $scope.quote.eventType
            };
            HomeService.Quote(quote).then(function(response) {
                alert('Quote succesfully registered!');
            }).catch(function(err) {
                console.log(err);
                alert(err.data.error + " " + err.data.message);
            });

        }

        $scope.reservationRequest = function() {
            var reservation = {
                client: $scope.reservation.client,
                company: $scope.reservation.company,
                email: $scope.user.email,
                quantity: $scope.reservation.quantity,
                day: $scope.reservation.day,
                hour: $scope.reservation.hour,
                eventType: $scope.reservation.eventType,
                locality: $scope.reservation.locality,
                comments: $scope.reservation.comments
            };
            HomeService.Reservation(reservation).then(function(response) {
                alert('Reservation succesfully registered!');
            }).catch(function(err) {
                console.log(err);
                alert(err.data.error + " " + err.data.message);
            });

        }

        $scope.Home = function() {
            $state.go('home')
        }

        $scope.Register = function() {
            $state.go('register')
        }

        $scope.Login = function() {
            $state.go('login')
        }

        $scope.Client = function() {
            $state.go('client')
        }

        $scope.QuoteClient = function() {
            $state.go('quoteClient')
        }

        $scope.ReservationClient = function() {
            $state.go('reservationClient')
        }



        $scope.isAdmin = function() {
            return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
        }

        $scope.isClient = function() {
            return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('client') > -1;
        }
    }]);