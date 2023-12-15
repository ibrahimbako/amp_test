import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput, DateInput } from "react-admin";

export const SimCardPoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="GammuExcluded" source="gammuExcluded" />
        <TextInput label="Pool" source="pool" />
        <DateInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
