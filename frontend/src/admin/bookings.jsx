import * as React from "react";
import { BooleanField, Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

export const BookingList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <BooleanField source="approved_status" />
            <DateField source="date" />
            <NumberField source="desk.id" />
            <NumberField source="user.id" />
        </Datagrid>
    </List>
);