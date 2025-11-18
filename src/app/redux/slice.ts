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
      state.push({ id: nanoid(), name: action.payload });
    },
    removeEmployee: (state, action: PayloadAction<string>) => {
      return state.filter((employee) => employee.id !== action.payload);
    },    
  },
});

export const { addEmployee, removeEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
