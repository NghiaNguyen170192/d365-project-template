namespace ProjectName.Contact {
  let formContext: Form.contact.Main.Contact;
  export function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
    formContext = <Form.contact.Main.Contact>executionContext.getFormContext();
    const name = formContext.getAttribute("name");

    alert(name);
  }
}
