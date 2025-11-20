import { createSlice, PayloadAction, nanoid, current } from "@reduxjs/toolkit";

interface Employee {
  id: string;
  name: string;
}

interface EmployeesState {
  employees: Employee[];
}

const initialState: EmployeesState = {
  employees: [],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    loadEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },

    addEmployee: (state, action: PayloadAction<string>) => {
      state.employees.push({ id: nanoid(), name: action.payload });

      if (typeof window !== "undefined") {
        localStorage.setItem("employees", JSON.stringify(current(state.employees)));
      }
    },

    removeEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter((emp) => emp.id !== action.payload);

      if (typeof window !== "undefined") {
        localStorage.setItem("employees", JSON.stringify(state.employees));
      }
    },
  },
});

export const { addEmployee, removeEmployee, loadEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
