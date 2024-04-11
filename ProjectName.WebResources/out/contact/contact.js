"use strict";
var ProjectName;
(function (ProjectName) {
    var Contact;
    (function (Contact) {
        let form;
        function onLoad(executionContext) {
            form = executionContext.getFormContext();
            const name = form.getAttribute("name");
            //test comment
            alert(name);
        }
        Contact.onLoad = onLoad;
    })(Contact = ProjectName.Contact || (ProjectName.Contact = {}));
})(ProjectName || (ProjectName = {}));
