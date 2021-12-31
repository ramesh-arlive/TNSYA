var LoginApp = angular.module('LoginApp', []);

LoginApp.controller('ChangePasswordController', ['$location', '$scope', function ($location, $scope) {
    $scope.errorMessage = '';
    jQuery(function ($) {
        //Generic Ajax handler
        $('form[data-async]').on('submit', function (event) {
            var $form = $(this);
            var $target = $($form.attr('data-target'));
            var $id = "#" + $form.attr('id');
            var disabled = $form.find(':input:disabled').removeAttr('disabled');
            $('.validation').html("<img width='50' height='50' src='../../Content/images/ajax-loader2.gif' />");
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function (data, status) {
                    $('.validation').html(data);
                    if (data == "success") {
                        reloadPage("#RedirectToHome");
                    }
                    else {
                        $scope.$apply(function () {
                            $scope.errorMessage = data;
                        });
                        //$toaster.pop('error', "Error", data, null);
                    }
                }
            });
            disabled.attr('disabled', 'disabled');
            event.preventDefault();
        });

        //Redirect helper
        function reloadPage(redirectTo) {
            var url = $(redirectTo).val();
            location.href = url;
        }
    });


}]);


LoginApp.controller('LoginController', ['$location', '$scope', 'ApiCall', function ($location, $scope, ApiCall) {
    $scope.errorMessage = '';
    $scope.resetemailid = '';
    ApiCall.MakeApiCall("GetResetMailid", 'GET', '').success(function (data) {
        $scope.resetemailid = data;

    }).error(function (error) {
        $scope.Error = error;
    })

    jQuery(function ($) {
        //Generic Ajax handler
        $('form[data-async]').on('submit', function (event) {
            var $form = $(this);
            var $target = $($form.attr('data-target'));
            var $id = "#" + $form.attr('id');
            var disabled = $form.find(':input:disabled').removeAttr('disabled');
            $('.validation').html("<img width='50' height='50' src='../../Content/images/ajax-loader2.gif' />");
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function (data, status) {
                    $('.validation').html(data);
                    debugger;
                    if (data === "Logged in successfully") {
                        reloadPage("#RedirectToHome");
                    }
                    else if (data === "Reset Password") {
                        reloadPage("#RedirectToResetPWD");
                    }
                    else {
                        $scope.$apply(function () {
                            $scope.errorMessage = data;
                        });
                        //$toaster.pop('error', "Error", data, null);
                    }
                }
            });
            disabled.attr('disabled', 'disabled');
            event.preventDefault();
        });

        //Redirect helper
        function reloadPage(redirectTo) {
            var url = $(redirectTo).val();
            location.href = url;
        }
    });


}]);





LoginApp.service('ApiCall', ['$http', function ($http) {
    var result;
    this.MakeApiCall = function (Url, type, jsondata) {
        //var Jsondata = JSON.stringify(data);
        Url = 'Home/' + Url;
        if (type == 'GET') {

            //return $http.get(Url, jsondata);

            return $http({
                url: Url,
                method: type,
                params: jsondata
            });
        } else if (type == 'POST') {
            return $http.post(Url, jsondata);

            //return $http({
            //    url: Url,
            //    method: type,
            //    data: jsondata
            //});
        }
    };
}]);