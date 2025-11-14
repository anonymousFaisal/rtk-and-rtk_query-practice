import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  id: string;
  name: string;
}

type EmployeesState = Employee[];

const initialState: EmployeesState = [];

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.push({ id: nanoid(), name: action.payload });
    },
  },
});

export const { addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
