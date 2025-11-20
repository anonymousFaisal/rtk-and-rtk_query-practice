import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./slices/employeeSlice";
import studentsReducer from "./slices/studentSlice";
import { employeesApi } from "./api/employeesAPI";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    students: studentsReducer,

    // RTK Query API reducer
    [employeesApi.reducerPath]: employeesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeesApi.middleware),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
