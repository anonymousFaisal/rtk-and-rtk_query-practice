import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Student {
  id: string;
  name: string;
}

type StudentsState = Student[];

const initialState: StudentsState = [];

const StudentsSlice = createSlice({
  name: "Students",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<string>) => {
      state.push({ id: nanoid(), name: action.payload });
    },
    removeStudent: (state, action: PayloadAction<string>) => {
      return state.filter((student) => student.id !== action.payload);
    },
  },
});

export const { addStudent, removeStudent } = StudentsSlice.actions;
export default StudentsSlice.reducer;
