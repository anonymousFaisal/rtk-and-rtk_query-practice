import { createSlice, PayloadAction, nanoid, current } from "@reduxjs/toolkit";

/**
 * ---------------------------------------------------------------
 * Employee Interface
 * ---------------------------------------------------------------
 * Defines the structure of an employee object.
 */
interface Employee {
  id: string;
  name: string;
}

/**
 * ---------------------------------------------------------------
 * Slice State Shape
 * ---------------------------------------------------------------
 * Only storing employees here because API data is now handled
 * by RTK Query separately.
 */
interface EmployeesState {
  employees: Employee[];
}

/**
 * ---------------------------------------------------------------
 * Initial State
 * ---------------------------------------------------------------
 */
const initialState: EmployeesState = {
  employees: [],
};

/**
 * ---------------------------------------------------------------
 * employeesSlice (Local State Only)
 * ---------------------------------------------------------------
 * This slice handles ONLY the local employee list
 * — things like add/remove employees and saving to localStorage.
 *
 * All API logic has now been moved to RTK Query,
 * so this slice becomes clean and focused.
 * ---------------------------------------------------------------
 */
const employeesSlice = createSlice({
  name: "employees",
  initialState,

  reducers: {
    /**
     * -----------------------------------------------------------
     * loadEmployees
     * -----------------------------------------------------------
     * Loads an array of employees into state.
     * Typically used when hydrating from localStorage.
     */
    loadEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },

    /**
     * -----------------------------------------------------------
     * addEmployee
     * -----------------------------------------------------------
     * Adds a new employee to local state and saves the updated
     * list to localStorage.
     */
    addEmployee: (state, action: PayloadAction<string>) => {
      state.employees.push({
        id: nanoid(),
        name: action.payload,
      });

      // Save to localStorage (client-side only)
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "employees",
          JSON.stringify(current(state.employees)) // current() ensures pure value
        );
      }
    },

    /**
     * -----------------------------------------------------------
     * removeEmployee
     * -----------------------------------------------------------
     * Removes an employee by ID and updates localStorage.
     */
    removeEmployee: (state, action: PayloadAction<string>) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );

      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("employees", JSON.stringify(state.employees));
      }
    },
  },
});

// Export Actions
export const { addEmployee, removeEmployee, loadEmployees } = employeesSlice.actions;

// Export Reducer
export default employeesSlice.reducer;
