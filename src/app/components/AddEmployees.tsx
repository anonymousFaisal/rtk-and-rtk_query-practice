"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/slice";

const AddEmployees = () => {
  const [empName, setEmpName] = useState("");
  const dispatch = useDispatch();

  const dataDispatch = (e: React.FormEvent) => {
    e.preventDefault();           // prevent page reload
    if (!empName.trim()) return;  // avoid empty input

    dispatch(addEmployee(empName));
    setEmpName("");
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        <h4 className="mb-4 text-center">Add Employee</h4>

        <form onSubmit={dataDispatch}>
          <div className="mb-3">
            <label htmlFor="employeeInput" className="form-label fw-semibold">
              Employee Name
            </label>
            <input
              id="employeeInput"
              type="text"
              className="form-control"
              placeholder="Enter employee name"
              value={empName}
              onChange={(e) => setEmpName(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary"> {/* ← type submit */}
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployees;
