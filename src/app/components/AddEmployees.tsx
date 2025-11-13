'use client';

const AddEmployees = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        <h4 className="mb-4 text-center">Add Employee</h4>

        <form>
          <div className="mb-3">
            <label htmlFor="employeeInput" className="form-label fw-semibold">
              Employee Name
            </label>
            <input
              id="employeeInput"
              type="text"
              className="form-control"
              placeholder="Enter employee name"
            />
          </div>

          <div className="d-grid">
            <button type="button" className="btn btn-primary">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployees;
