import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./slices/employeeSlice";
import studentsReducer from "./slices/studentSlice";
import { employeesApi } from "./api/employeesAPI";

// -------------------------------------------------------------
// CONFIGURE STORE
// -------------------------------------------------------------
// This store demonstrates:
// 1. Basic RTK slices (employees + students)
// 2. RTK Query API slice (employeesApi)
// Both approaches can run side-by-side in the same Redux store.
// -------------------------------------------------------------

export const store = configureStore({
  reducer: {
    // -------------------------------
    // Traditional RTK Slice Reducers
    // -------------------------------
    // These manage *local app state* (UI-driven or manually managed data)
    employees: employeesReducer,
    students: studentsReducer,

    // -------------------------------
    // RTK Query API Slice Reducer
    // -------------------------------
    // RTK Query automatically creates a reducer to store:
    // - cached API responses
    // - request statuses (loading, success, error)
    // - cache lifetimes & tags
    //
    // We MUST add the reducer under its generated key (employeesApi.reducerPath)
    [employeesApi.reducerPath]: employeesApi.reducer,
  },

  // -------------------------------------------------------------
  // MIDDLEWARE
  // -------------------------------------------------------------
  // RTK Query requires its own middleware to:
  // - handle request lifecycle (trigger fetches, re-fetch on focus, polling)
  // - manage cache invalidation
  // - manage subscriptions to query data
  //
  // We extend the default middleware and add employeesApi.middleware.
  // -------------------------------------------------------------
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeesApi.middleware),
});

// -------------------------------------------------------------
// TYPES
// -------------------------------------------------------------
// These help enforce type safety throughout your app.
// -------------------------------------------------------------
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
