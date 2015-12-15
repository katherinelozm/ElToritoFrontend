angular.module('ElTorito.Controllers')
    .controller('HomeController', ['$scope', '$rootScope', '$sessionStorage', 'HomeService', '$state', function($scope, $rootScope, $sessionStorage, HomeService, $state) {
        $scope.user = {};
        $scope.quote = {};
        $scope.reservation = {};
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

        $scope.registerAdmin = function() {
            var user = {
                name: $scope.user.userName,
                email: $scope.user.email,
                number: $scope.user.number,
                password: $scope.user.password,
                scope: $scope.user.userType
            };
            HomeService.Register(user).then(function(response) {
                alert('Registered in correctly!');
                $scope.login({
                    email: user.email,
                    password: user.password
                });
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

        $scope.reservationRequest2 = function() {
            var reservation = {
                client: $scope.reservation.client,
                company: $scope.reservation.company,
                email: $scope.reservation.email,
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

        //Client
        $scope.Client = function() {
            $state.go('client')
        }

        $scope.QuoteClient = function() {
            $state.go('quoteClient')
        }

        $scope.ReservationClient = function() {
            $state.go('reservationClient')
        }

        //Admin
        $scope.Admin = function() {
            $state.go('administrador')
        }

        $scope.QuoteAdmin = function() {
            $state.go('quoteAdmin')
        }

        $scope.ReservationAdmin = function() {
            $state.go('reservationAdmin')
        }

        $scope.ReservationView = function() {
            $state.go('reservationView')
        }

        $scope.RegisterAdmin = function() {
            $state.go('registerAdmin')
        }

        $scope.UserView = function() {
            $state.go('userView')
        }

        $scope.Reports = function() {
            $state.go('reports')
        }

        $scope.getReservations = function() {
            HomeService.GetReservations().then(function(response) {
                $scope.reservation = response.data;
            }).catch(function(err) {
                alert(err.data.error + " " + err.data.message)
            });
        }

        $scope.postReservations = function() {
                HomeService.PostReservations($scope.reservation).then(function(response) {
                    alert("Posted");
                    $scope.getReservations();
                }).catch(function(err) {
                    alert(err.data.error + " " + err.data.message);
                });
        }

        $scope.getQuotes = function() {
            HomeService.GetQuotes().then(function(response) {
                $scope.reservation = response.data;
            }).catch(function(err) {
                alert(err.data.error + " " + err.data.message)
            });
        }

        $scope.postQuotes = function() {
                HomeService.PostQuotes($scope.reservation).then(function(response) {
                    alert("Posted");
                    $scope.getQuotes();
                }).catch(function(err) {
                    alert(err.data.error + " " + err.data.message);
                });
        }

        $scope.getUsers2 = function() {
            HomeService.GetUsers2().then(function(response) {
                $scope.user = response.data;
            }).catch(function(err) {
                alert(err.data.error + " " + err.data.message)
            });
        }

        $scope.postUsers = function() {
            HomeService.PostUsers($scope.user).then(function(response) {
                alert("Posted");
                $scope.getUsers2();
            }).catch(function(err) {
                alert(err.data.error + " " + err.data.message);
            });
        }
           
            //
        $scope.isAdmin = function() {
            return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
        }

        $scope.isClient = function() {
            return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('client') > -1;
        }

        var app = angular.module('plunker', []);

        app.controller('MainCtrl', function($scope) {
            $scope.divShow = "graph1"
            $scope.show = function(arg) {
                $scope.divShow = arg;
            }
        });
    }]);