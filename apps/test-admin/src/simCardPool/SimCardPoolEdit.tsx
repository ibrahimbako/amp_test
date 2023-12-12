import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
} from "react-admin";

export const SimCardPoolEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
