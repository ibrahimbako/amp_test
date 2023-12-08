import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SimCardPoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Pool" source="pool" />
        <TextInput label="Updated At" multiline source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
