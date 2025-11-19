"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/slice";
import Link from "next/link";

const AddEmployees = () => {
  const [empName, setEmpName] = useState("");
  const dispatch = useDispatch();

  const dataDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!empName.trim()) return;

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
            <button type="submit" className="btn btn-primary">
              Add Employee
            </button>
          </div>

          <div className="d-grid pt-3">
            <Link href="/delete-employee" className="btn btn-danger">
              Delete Employee 
            </Link>
          </div>
          <div className="d-grid pt-3">
            <Link href="/students" className="btn btn-success">
              Show Students 
            </Link>
          </div>
          <div className="d-grid pt-3">
            <Link href="/api-data" className="btn btn-success">
              Show API 
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployees;
