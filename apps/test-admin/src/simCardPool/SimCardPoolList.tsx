import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SimCardPoolList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SimCardPools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="GammuExcluded" source="gammuExcluded" />
        <TextField label="ID" source="id" />
        <TextField label="Pool" source="pool" />
        <TextField label="Updated At" source="updatedAt" />
      </Datagrid>
    </List>
  );
};
