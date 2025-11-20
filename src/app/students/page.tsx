"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, removeStudent } from "../store/slices/studentSlice";
import { RootState } from "../store/store";

const Students = () => {
  const [studentName, setStudentName] = useState("");

  const dispatch = useDispatch();
  const studentsData = useSelector((state: RootState) => state.students);

  const dataDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    dispatch(addStudent(studentName));
    setStudentName("");
  };

  const handleRemove = (id: string) => {
    dispatch(removeStudent(id));
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      {/* Register Student Card */}
      <div className="card shadow-sm p-4 mb-4" style={{ width: "400px" }}>
        <h4 className="mb-4 text-center">Register Student</h4>

        <form onSubmit={dataDispatch}>
          <div className="mb-3">
            <label htmlFor="studentInput" className="form-label fw-semibold">
              Student Name
            </label>
            <input
              id="studentInput"
              type="text"
              className="form-control"
              placeholder="Enter student name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Register Student
            </button>
          </div>
        </form>
      </div>

      {/* Show Students List */}
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        <h4 className="mb-4 text-center text-primary">Students List</h4>

        {studentsData.length === 0 ? (
          <p className="text-center text-muted">No students added yet.</p>
        ) : (
          <ul className="list-group">
            {studentsData.map((student) => (
              <li key={student.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{student.name}</span>

                <button className="btn btn-danger btn-sm" onClick={() => handleRemove(student.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Students;
