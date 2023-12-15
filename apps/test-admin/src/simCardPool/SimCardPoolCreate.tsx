import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateInput,
} from "react-admin";

export const SimCardPoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="GammuExcluded" source="gammuExcluded" />
        <TextInput label="Pool" source="pool" />
        <DateInput label="Updated At" source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
