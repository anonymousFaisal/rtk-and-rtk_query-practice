import { createAsyncThunk, createSlice, PayloadAction, nanoid, current } from "@reduxjs/toolkit";

interface Employee {
  id: string;
  name: string;
}

interface APIUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface EmployeesState {
  employees: Employee[];
  employeeAPIData: APIUser[];
  isLoading: boolean;
  error: string | null;
}

const initialState: EmployeesState = {
  employees: [],
  employeeAPIData: [],
  isLoading: false,
  error: null,
};

// Typed API Fetch
export const apiData = createAsyncThunk<APIUser[]>("employees/apiData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
});

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    loadEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },

    addEmployee: (state, action: PayloadAction<string>) => {
      state.employees.push({ id: nanoid(), name: action.payload });

      const empData = JSON.stringify(current(state.employees));
      if (typeof window !== "undefined") {
        localStorage.setItem("employees", empData);
      }
    },

    removeEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter((emp) => emp.id !== action.payload);

      if (typeof window !== "undefined") {
        const empData = JSON.stringify(state.employees);
        localStorage.setItem("employees", empData);
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(apiData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employeeAPIData = action.payload;
      })
      .addCase(apiData.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to fetch API data";
      });
  },
});

export const { addEmployee, removeEmployee, loadEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
