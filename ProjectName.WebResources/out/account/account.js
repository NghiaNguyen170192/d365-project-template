"use strict";
var ProjectName;
(function (ProjectName) {
    var Account;
    (function (Account) {
        let formContext;
        function onLoad(executionContext) {
            formContext = executionContext.getFormContext();
        }
        Account.onLoad = onLoad;
    })(Account = ProjectName.Account || (ProjectName.Account = {}));
})(ProjectName || (ProjectName = {}));
