var ProjectName;
(function (ProjectName) {
    var Contact;
    (function (Contact) {
        let Form;
        function onLoad(executionContext) {
            Form = executionContext.getFormContext();
            const name = Form.getAttribute("name");
            alert(name);
        }
        Contact.onLoad = onLoad;
    })(Contact = ProjectName.Contact || (ProjectName.Contact = {}));
})(ProjectName || (ProjectName = {}));
