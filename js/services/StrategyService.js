'use strict';
ReportApp.factory('StrategyService', ['$http', '$window', function ($http, $window) {
    var StrategyServiceURI = BaseURL + 'Main/';
    var StrategyServiceFactory = {};

    var url;
    StrategyServiceFactory.GetStrategyApprovalByuser = function () {
        var result = $http.get(StrategyServiceURI + 'GetStrategyApprovalByuser');
        return result;
    }


    StrategyServiceFactory.GetDelegatedApprovalByuser = function () {
        var result = $http.get(StrategyServiceURI + 'GetDelegatedApprovalByuser');
        return result;
    }

    StrategyServiceFactory.GetAllCurrencyConversion = function () {
        var result = $http.get(StrategyServiceURI + 'GetData');
        return result;
    }
    StrategyServiceFactory.GetAllComponentData = function () {
        var result = $http.get(StrategyServiceURI + 'GetAllWGOneMappingList?WGOneMappingId=');
        return result;
    }
    StrategyServiceFactory.GetAllConsolidatedComponentData = function (userId) {
        var result = $http.get(StrategyServiceURI + 'GetAllConsolidatedWG?WGOneMappingId=' + '' + '&userId=' + userId);
        return result;
    }
    StrategyServiceFactory.GetAllStrategyForCRA = function () {
        var result = $http.get(StrategyServiceURI + 'GetDataForCRA');
        return result;
    }
    StrategyServiceFactory.GetDatabyId = function (Strategyid) {
        var result = $http.get(StrategyServiceURI + 'GetDatabyId?Strategynumber=' + Strategyid);
        return result;
    }
    StrategyServiceFactory.GetWorkingGroupDatabyId = function (id) {
        var result = $http.get(StrategyServiceURI + 'GetWorkingGroupDatabyId?Id=' + id);
        return result;
    }
    StrategyServiceFactory.GetSelfAssessmentControlsDatabyId = function (id) {
        var result = $http.get(StrategyServiceURI + 'GetSelfAssessmentControlsDatabyId?Id=' + id);
        return result;
    }
    StrategyServiceFactory.GetCommentsDataByRefId = function (refid) {
        var result = $http.get(StrategyServiceURI + 'GetCommentsDataByRefId?RefNumber=' + refid);
        return result;
    }
    StrategyServiceFactory.UpdateStrategyAttest = function (data) {
        var response = $http({
            method: "post",
            url: "Main/UpdateStrategyAttest",
            data: data
        });
        return response;
    }
    StrategyServiceFactory.UpdateStrategyApproval1 = function (data) {
        var response = $http({
            method: "post",
            url: "Main/UpdateStrategyApproval1",
            data: data
        });
        return response;
    }
    StrategyServiceFactory.UpdateStrategyApproval2 = function (data) {
        var response = $http({
            method: "post",
            url: "Main/UpdateStrategyApproval2",
            data: data
        });
        return response;
    }
    StrategyServiceFactory.GetStrategyDatabyStrategyId = function (Strategyid) {
        var result = $http.get(StrategyServiceURI + 'GetStrategyDatabyStrategyId?Strategynumber=' + Strategyid);
        return result;
    }
    StrategyServiceFactory.GetStrategyApprovalById = function (Strategyid, Version) {
        var result = $http.get(StrategyServiceURI + 'GetStrategyApprovalById?Strategynumber=' + Strategyid + '&Version=' + Version);
        return result;
    }

    StrategyServiceFactory.InsertStrategyApprover = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'InsertStrategyApprover', currencysheet);
    }
    StrategyServiceFactory.InsertStrategy = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'InsertStrategy', currencysheet);
    }

    StrategyServiceFactory.SaveNewversionStrategy = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'SaveNewversionStrategy', currencysheet);
    }
    
    StrategyServiceFactory.UpdateStrategy = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'UpdateStrategy', currencysheet);
    }
    StrategyServiceFactory.UpdateWrokingGroup = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'UpdateWrokingGroup', currencysheet);
    }
    StrategyServiceFactory.UpdateControlsGroup = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'UpdateControlsGroup', currencysheet);
    }
    StrategyServiceFactory.UpdateSelfAssessmentControls = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'UpdateSelfAssessmentControls', currencysheet);
    }
    StrategyServiceFactory.DeleteStrategyApprover = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'DeleteStrategyApprover', currencysheet);
    }

    StrategyServiceFactory.UpdatecurrencyConversion = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'currency/ModifyCurrencyConversion', currencysheet);
    }


    //TransferSettings

    StrategyServiceFactory.GetTransfersetting = function () {
        var result = $http.get(StrategyServiceURI + 'GetTransferSettingByuser');
        return result;
    }

    StrategyServiceFactory.InsertTransferSetting = function (currencysheet) {
        return $http.post(StrategyServiceURI + 'InsertTransferSetting', currencysheet);
    }
    StrategyServiceFactory.DeleteTransferSetting = function () {
        return $http.get(StrategyServiceURI + 'DeleteTransferSetting');
    }
    StrategyServiceFactory.Get_ApprovaltransferByuser = function () {
        return $http.get(StrategyServiceURI + 'Get_ApprovaltransferByuser');
    }
    StrategyServiceFactory.DownLoadFile = function (ReferenceCode, refnumber) {
        url = StrategyServiceURI + 'DownLoadFile?FileName=' + ReferenceCode + '&RefNumber=' + refnumber;
        //var s= $http.get(url);
        $window.open(url);
    }
    StrategyServiceFactory.DownLoadReportFile = function (file) {
        url = StrategyServiceURI + 'DownLoadReportFile?FileName=' + file;
        $window.open(url);
    }

    StrategyServiceFactory.ShowLoader = function () {
        angular.element(document.querySelector('#loader')).removeClass('hide');
    };
    StrategyServiceFactory.HideLoader = function () {
        angular.element(document.querySelector('#loader')).addClass('hide');
    };
    return StrategyServiceFactory;
}]);



ReportApp.service('apiService', function ($http) {
    var URl = 'Main/';
    this.GetusercountryMapping = function (userid) {
        var response = $http.get(URl + 'GetusercountryMapping?userId=' + userid);
        return response;
    };
    this.GetuserRegionMapping = function (userid) {
        var response = $http.get(URl + 'GetuserRegionMapping?userId=' + userid);
        return response;
    }; 
    this.GetAllRIModule = function () {
        var response = $http.get(URl + 'GetAllRIModule?Id=');
        return response;
    };
    this.GetAllRiskModule = function () {
        var response = $http.get(URl + 'GetAllRiskModule?Id=');
        return response;
    };
    this.GetAllControlInventory = function () {
        var response = $http.get(URl + 'GetAllControlInventory?Id=');
        return response;
    };
    this.GetAllBusinessDivision = function () {
        var response = $http.get(URl + 'GetAllBusinessDivision?Id=');
        return response;
    };
    this.GetBusinessMapping = function (userid) {
        var response = $http.get(URl + 'GetBusinessMapping?userId=' + userid);
        return response;
    };
    this.GetAllDepartment = function () {
        var response = $http.get(URl + 'GetAllDepartment?Id=');
        return response;
    };
    this.GetAllPolicyRFramework = function () {
        var response = $http.get(URl + 'GetAllPolicyRFramework?Id=');
        return response;
    }; 
    this.GetAllBusinessDivision = function () {
        var response = $http.get(URl + 'GetAllBusinessDivision?Id=');
        return response;
    };
    this.GetAllTeam = function () {
        var response = $http.get(URl + 'GetAllTeam?Id=');
        return response;
    };
    this.GetAllBusinessProcess = function () {
        var response = $http.get(URl + 'GetAllBusinessProcess?BusinessProcessId=');
        return response;
    };
    this.GetAllBusinessSubProcess = function () {
        var response = $http.get(URl + 'GetAllBusinessSubProcess?Id=');
        return response;
    };
    this.GetAllSeverity = function () {
        var response = $http.get(URl + 'GetAllSeverity?Id=');
        return response;
    };
    this.GetAllProbability = function () {
        var response = $http.get(URl + 'GetAllProbability?Id=');
        return response;
    };
    this.GetAllCAMapping = function () {
        var response = $http.get(URl + 'GetAllCAMapping?CAMappingId=');
        return response;
    };
    this.GetAllControlLocation = function () {
        var response = $http.get(URl + 'GetAllControlLocation?ControlLocationId=');
        return response;
    };

    this.GetAllApplication = function () {
        var response = $http.get(URl + 'GetAllApplication?ApplicationId=');
        return response;
    };
    this.GetAllBusinessSector = function () {
        var response = $http.get(URl + 'GetAllBusinessSector?BusinessSectorId=');
        return response;
    };
    this.GetAllCountry = function () {
        var response = $http.get(URl + 'GetAllCountry?CountryId=');
        return response;
    };
    this.GetAllCRAForm = function () {
        var response = $http.get(URl + 'GetAllCRAForm?CRAFormId=');
        return response;
    };
    this.GetAllConductRisk = function () {
        var response = $http.get(URl + 'GetAllConductRisk?ConductRiskId=');
        return response;
    };
    this.GetAllApplicability = function () {
        var response = $http.get(URl + 'GetAllApplicability?ApplicabilityId=');
        return response;
    };
    this.GetAllCodeConfig = function () {
        var response = $http.get(URl + 'GetAllCodeConfig?CodeConfigId=');
        return response;
    };
    this.GetAllCategory = function () {
        var response = $http.get(URl + 'GetAllCategory?CategoryId=');
        return response;
    };
    this.GetAllProductType = function () {
        var response = $http.get(URl + 'GetAllProductType?ProductTypeId=');
        return response;
    };
    this.GetAllLTAApplicationCode = function () {
        var response = $http.get(URl + 'GetAllLTAApplicationCode?LTAApplicationCodeId=');
        return response;
    };
    this.GetAllControlFrequency = function () {
        var response = $http.get(URl + 'GetAllControlFrequency?ControlFreqId=');
        return response;
    };
    this.GetAllMonitoringFrequency = function () {
        var response = $http.get(URl + 'GetAllMonitoringFrequency?MonitoringFreqId=');
        return response;
    };
    this.GetAllControlName = function () {
        var response = $http.get(URl + 'GetAllControlName?ControlNameId=');
        return response;
    }; 
    this.GetAllComplianceStatus = function () {
        var response = $http.get(URl + 'GetAllComplianceStatus?ComplianceStatusId=');
        return response;
    };
    this.GetAllTestResult = function () {
        var response = $http.get(URl + 'GetAllTestResult?TestResultId=');
        return response;
    };
    this.GetUsers = function () {
        var response = $http.get(URl + 'getusers?userid=');
        return response;
    };
    this.GetAllControlDefinition = function () {
        var response = $http.get(URl + 'GetAllControlDefinition?ControlDefinitionId=');
        return response;
    };
    this.GetAllControlExists = function () {
        var response = $http.get(URl + 'GetAllControlExists?ControlExistsId=');
        return response;
    };
    this.GetAllThirdPartyAppList = function () {
        var response = $http.get(URl + 'GetAllThirdPartyAppList?Id=');
        return response;
    };
    this.GetAllBusiness = function () {
        var response = $http.get(URl + 'GetAllBusiness?BusinessId=');
        return response;
    }; 
    this.GetAllSAFormMapping = function () {
        var response = $http.get(URl + 'GetAllSAFormMapping?SAFormMappingId=');
        return response;
    };
    this.GetAllRegulator = function () {
        var response = $http.get(URl + 'GetAllRegulator?RegulatorId=');
        return response;
    };
    this.GetAllLTAStrategyCode = function () {
        var response = $http.get(URl + 'GetAllLTAStrategyCode?LTAStrategyCodeId=');
        return response;
    };
    this.GetAllDiscretionaryCode = function () {
        var response = $http.get(URl + 'GetAllDiscretionaryCode?DiscretionaryCodeId=');
        return response;
    };
    this.GetAllBusinessSuffix = function () {
        var response = $http.get(URl + 'GetAllBusinessSuffix?BusinessSuffixId=');
        return response;
    };
    this.GetAllParentID = function () {
        var response = $http.get(URl + 'GetAllParentID?ParentIDId=');
        return response;
    };
    this.GetAllChildID = function () {
        var response = $http.get(URl + 'GetAllChildID?ChildIDId=');
        return response;
    };
    this.GetAllControlType = function () {
        var response = $http.get(URl + 'GetAllControlType?ControlTypeId=');
        return response;
    };
    this.GetAllLocation = function () {
        var response = $http.get(URl + 'GetAllLocation?LocationId=');
        return response;
    }; 
    this.GetAllBusinessLine = function () {
        var response = $http.get(URl + 'GetAllBusinessLine?BusinessLineId=');
        return response;
    };
    this.GetAllLifecycleLocation = function () {
        var response = $http.get(URl + 'GetAllLifecycleLocation?LifecycleId=');
        return response;
    }; 
    this.GetAllTriggerLimit = function () {
        var response = $http.get(URl + 'GetAllTriggerLimit?TriggerLimitId=');
        return response;
    }; 
    this.GetAllNotificationMethod = function () {
        var response = $http.get(URl + 'GetAllNotificationMethod?NotificationMethodId=');
        return response;
    };
    this.GetAllNotificationRecipient = function () {
        var response = $http.get(URl + 'GetAllNotificationRecipient?NotificationRecipientId=');
        return response;
    };
    this.GetAllControlReference = function () {
        var response = $http.get(URl + 'GetAllControlReference?ControlRefId=');
        return response;
    };
    this.GetAllApplicationCategory = function () {
        var response = $http.get(URl + 'GetAllApplicationCategory?ApplicationCategoryId=');
        return response;
    };
    this.GetAllCRAForm = function () {
        var response = $http.get(URl + 'GetAllCRAForm?CRAFormId=');
        return response;
    };
    this.GetAllLTAApplicationName = function () {
        var response = $http.get(URl + 'GetAllLTAApplicationName?LTAApplicationNameId=');
        return response;
    };
    this.GetAllControlCategory = function () {
        var response = $http.get(URl + 'GetAllControlCategory?ControlCategoryId=');
        return response;
    };
    this.GetAllLTAStrategyName = function () {
        var response = $http.get(URl + 'GetAllLTAStrategyName?LTAStrategyNameId=');
        return response;
    };
    this.GetAllVenuetype = function () {
        var response = $http.get(URl + 'GetAllVenuetype?VenuetypeId=');
        return response;
    };
    this.GetAllStrategytype = function () {
        var response = $http.get(URl + 'GetAllStrategytype?StrategytypeId=');
        return response;
    };
    this.GetAllCapacity = function () {
        var response = $http.get(URl + 'GetAllCapacity?CapacityId=');
        return response;
    };
    this.GetAllRegion = function () {
        var response = $http.get(URl + 'GetAllRegion?RegionId=');
        return response;
    };
    this.GetAllStatusType = function () {
        var response = $http.get(URl + 'GetAllStatusType?Id=');
        return response;
    };

});
