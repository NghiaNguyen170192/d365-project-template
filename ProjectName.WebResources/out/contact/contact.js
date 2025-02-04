"use strict";
var ProjectName;
(function (ProjectName) {
    var Contact;
    (function (Contact) {
        let formContext;
        function onLoad(executionContext) {
            formContext = executionContext.getFormContext();
            const name = formContext.getAttribute("name");
            alert(name);
        }
        Contact.onLoad = onLoad;
    })(Contact = ProjectName.Contact || (ProjectName.Contact = {}));
})(ProjectName || (ProjectName = {}));
