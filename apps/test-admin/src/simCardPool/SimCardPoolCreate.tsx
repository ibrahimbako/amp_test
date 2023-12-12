import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const SimCardPoolCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="Pool"
          source="pool"
          choices={[
            { label: "test1", value: "Test1" },
            { label: "test2", value: "Test2" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Updated At" multiline source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
