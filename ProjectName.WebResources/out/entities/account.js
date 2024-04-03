"use strict";
var ProjectName;
(function (ProjectName) {
    var Account;
    (function (Account) {
        let form;
        let formType = 1;
        function onLoad(executionContext) {
            form = executionContext.getFormContext();
            const name = form.getAttribute("name");
            console.log(name);
            console.log(formType);
        }
        Account.onLoad = onLoad;
    })(Account = ProjectName.Account || (ProjectName.Account = {}));
})(ProjectName || (ProjectName = {}));
