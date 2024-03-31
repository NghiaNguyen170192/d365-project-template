namespace ProjectName.Account {
  let Form: Form.account.Main.Account;
  export function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
    Form = <Form.account.Main.Account>executionContext.getFormContext();
    const name = Form.getAttribute("name");
    alert(name);
  }
}
