namespace ProjectName.Account {
    let formContext: Form.account.Main.Account;
    export function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
        formContext = executionContext.getFormContext() as Form.account.Main.Account;
        
    }
}