namespace ProjectName.Contact {
  let form: Form.contact.Main.Contact;
  export function onLoad(executionContext: Xrm.ExecutionContext<any, any>) {
    form = <Form.contact.Main.Contact>executionContext.getFormContext();
    const name = form.getAttribute("name");
    //test comment

    alert(name);
  }
}
