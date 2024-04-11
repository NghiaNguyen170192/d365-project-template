namespace ProjectName.Account {
    let form: Form.account.Main.Account;
    let formType = Xrm.FormType.Create;
    export function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
        form = executionContext.getFormContext() as Form.account.Main.Account;
        const name = form.getAttribute("name");
        console.log(name);
        console.log(formType);
    }
}