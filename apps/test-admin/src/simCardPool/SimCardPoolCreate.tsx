import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SimCardPoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Pool" source="pool" />
        <TextInput label="Updated At" multiline source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
