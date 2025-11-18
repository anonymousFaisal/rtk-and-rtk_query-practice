"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeEmployee } from "../redux/slice";
import Link from "next/link";

const ShowEmployees = () => {
  const dispatch = useDispatch();
  const employeeData = useSelector((state: RootState) => state.employees);

  const handleRemove = (id: string) => {
    dispatch(removeEmployee(id));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h4 className="mb-4 text-center text-primary">Employees List</h4>

        <ul className="list-group">
          {employeeData.map((employee) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={employee.id}
            >
              <span>{employee.name}</span>

              <div className="d-flex gap-2">
                
                {/* Update Button */}
                <Link href={`/update/${employee.id}`}>
                  <button className="btn btn-warning btn-sm">Update</button>
                </Link>

                {/* Remove Button */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemove(employee.id)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowEmployees;
