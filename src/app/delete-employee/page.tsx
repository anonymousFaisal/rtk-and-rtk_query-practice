"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeEmployee } from "../redux/slice";

const DeleteEmployee = () => {
  const dispatch = useDispatch();
  const employeeData = useSelector((state: RootState) => state.employees);

  const handleRemove = (id: string) => {
    dispatch(removeEmployee(id));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h4 className="mb-4 text-center text-danger">Delete Employees</h4>

        {employeeData.length === 0 ? (
          <div className="text-center text-muted">No employees available.</div>
        ) : (
          <ul className="list-group">
            {employeeData.map((employee) => (
              <li
                key={employee.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{employee.name}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(employee.id)}
                >
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

export default DeleteEmployee;
