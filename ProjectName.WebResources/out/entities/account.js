var ProjectName;
(function (ProjectName) {
    var Account;
    (function (Account) {
        let Form;
        function onLoad(executionContext) {
            Form = executionContext.getFormContext();
            const name = Form.getAttribute("name");
            alert(name);
        }
        Account.onLoad = onLoad;
    })(Account = ProjectName.Account || (ProjectName.Account = {}));
})(ProjectName || (ProjectName = {}));
