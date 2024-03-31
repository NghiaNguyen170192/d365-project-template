namespace ProjectName.Contact {
  let Form: Form.contact.Main.Contact;
  export function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
    Form = <Form.contact.Main.Contact>executionContext.getFormContext();
    const name = Form.getAttribute("name");
    alert(name);
  }
}
