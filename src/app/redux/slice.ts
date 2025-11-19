import { createAsyncThunk, createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Employee {
  id: string;
  name: string;
}

interface EmployeesState {
  employees: Employee[];
  employeeAPIData: unknown[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeesState = {
  employees: [],
  employeeAPIData: [],
  isLoading: false,
  error: null,
};

// Fetch API
export const apiData = createAsyncThunk("employees/apiData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
});

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<string>) => {
      state.employees.push({ id: nanoid(), name: action.payload });
    },
    removeEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(apiData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeAPIData = action.payload; // store the API data
      })
      .addCase(apiData.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to fetch API data";
      });
  },
});

export const { addEmployee, removeEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
