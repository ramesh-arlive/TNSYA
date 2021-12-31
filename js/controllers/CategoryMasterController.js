ReportApp.controller('CategoryMasterController', ['$scope', '$rootScope', '$timeout', 'ApiCall', 'UserFactory', 'reportFactory', 'toaster', '$compile', 'DTOptionsBuilder', 'DTColumnBuilder', 'StrategyService', function ($scope, $rootScope, $timeout, ApiCall, UserFactory, reportFactory, toaster, $compile, DTOptionsBuilder, DTColumnBuilder, StrategyService) {
    $scope.data = [];
    $scope.showAddwindow = false;
    $scope.dtOptions = DTOptionsBuilder.fromSource()
        .withPaginationType('full_numbers').withOption('createdRow', createdRow)
    .withOption('lengthMenu', [100, 150, 200, 250]);
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('Id').withTitle('ID').notVisible(),
        DTColumnBuilder.newColumn('CategoryName').withTitle('Category Name'),
        DTColumnBuilder.newColumn('Id').withTitle('Actions').notSortable()
            .renderWith(actionsHtml)
    ];
    function createdRow(row, data, dataIndex) {
        $compile(angular.element(row).contents())($scope);
    }

    function actionsHtml(data, type, full, meta) {
        if ($scope.IsReadOnly) {
            return "-";
        }
        else {
            $scope.data = data;
            return '<a  ng-click="GetCRAFormMasterById(' + data + ')"><img src="images/edit.png"></a> ';
        }
    }

    $scope.editMode = false;
    $scope.IsReadOnly = true;
    $scope.Showadd = function () {
        $scope.showAddwindow = true;
    }


    $scope.GetAllCategoryMaster = function () {
        ApiCall.MakeApiCall("GetAllCategory?CategoryId=", 'GET', '').success(function (data) {

            $scope.data = data;
            $scope.dtOptions.data = $scope.data
            StrategyService.HideLoader();
        }).error(function (error) {
            $scope.Error = error;
        })
    };


    $scope.add = function (CategoryMaster) {
        if (CategoryMaster !== null) {
            if (CategoryMaster.CategoryName.trim() != "") {
                ApiCall.MakeApiCall("AddCategory", 'POST', CategoryMaster).success(function (data) {
                    if (data.Error != undefined) {
                        toaster.pop('error', "Error", data.Error, null);
                    } else {
                        if (data == 'success') {
                            $scope.CategoryMaster = null;
                            $scope.GetAllCategoryMaster();
                            $scope.editMode = false;

                            $scope.showAddwindow = false;
                            toaster.pop('success', "Success", 'Category added successfully', null);
                        }
                        else
                            toaster.pop('warning', "Warning", data, null);

                    }

                }).error(function (data) {
                    $scope.error = "An Error has occured while Adding Category ! " + data.ExceptionMessage;
                });
            }
            else {
                toaster.pop('warning', "Warning", 'Please enter Category', null);
            }
        }
        else {
            toaster.pop('warning', "Warning", 'Please enter Category', null);
        }

    };

    $scope.GetCRAFormMasterById = function (CategoryMasterId) {
        ApiCall.MakeApiCall("GetAllCategory?CategoryId=" + CategoryMasterId, 'GET', '').success(function (data) {
            $scope.editMode = true;
            $scope.showAddwindow = true;
            $scope.CategoryMaster = data[0];
            $scope.Prevvalue = angular.copy($scope.CategoryMaster)
        }).error(function (data) {
            $scope.error = "An Error has occured while Adding Category! " + data.ExceptionMessage;
        });
    };


    $scope.delete = function () {
        ApiCall.MakeApiCall("DeleteCategory?CategoryId=" + $scope.CategoryMasterId, 'GET', '').success(function (data) {
            $scope.CategoryMaster = null;
            $scope.editMode = false;
            $scope.GetAllCategoryMaster();
            $('#confirmModal').modal('hide');
            $scope.showAddwindow = false;
            toaster.pop('success', "Success", 'Category deleted successfully', null);
        }).error(function (data) {
            $scope.error = "An Error has occured while deleting user! " + data.ExceptionMessage;
        });
    };

    $scope.Confirmcancel = function () {
        $('#confirmModal').modal('show');
    }

    $scope.UpdateApplicabilityMaster = function (model) {
        if (model != null) {
            if (model.CategoryName.trim() != "") {
                var array = [];
                array.push(model);
                array.push($scope.Prevvalue);
                ApiCall.MakeApiCall("ModifyCategory", 'POST', array).success(function (data) {
                    if (data == 'success') {

                        $scope.editMode = false;
                        $scope.CategoryMaster = null;
                        $scope.GetAllCategoryMaster();
                        $scope.showAddwindow = false;
                        toaster.pop('success', "Success", 'Category updated successfully', null);
                    }
                    else
                        toaster.pop('warning', "Warning", data, null);
                }).error(function (data) {
                    $scope.error = "An Error has occured while Adding CategoryMaster! " + data.ExceptionMessage;
                });
            }
            else {
                toaster.pop('warning', "Warning", 'Please enter Category', null);
            }
        }
        else {
            toaster.pop('warning', "Warning", 'Please enter Category', null);
        }
    };

    $scope.showconfirm = function (data) {
        $scope.CategoryMasterId = data;
        $('#confirmModal').modal('show');
    };

    $scope.cancel = function () {
        $scope.CategoryMaster = null;
        $scope.editMode = false;
        $scope.showAddwindow = false;
        $('#confirmModal').modal('hide');
    };

    $scope.GetRightsList = function () {
        StrategyService.ShowLoader();
        UserFactory.getloggedusername().success(function (data) {
            var userId = data;
            if (data != '') {
                reportFactory.GetRightsList(userId).success(function (data) {
                    var isRead = true;
                    $scope.IsReadOnly = true;
                    angular.forEach(data, function (value, key) {
                        if (value.RightName == 'Master Page Write') {
                            //if (value.RightName == 'ApplicationCategory Write') {
                            isRead = false;
                        }
                    })
                    if (!isRead) {
                        $scope.IsReadOnly = false;
                    }
                    $scope.GetAllCategoryMaster();
                }).error(function (error) {
                    console.log('Error when getting rights list: ' + error);
                });
            }

        });
    };
    $scope.GetRightsList();

}]);