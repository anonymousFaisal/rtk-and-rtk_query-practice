"use client";

import { useGetUsersQuery } from "../store/api/employeesAPI";

/**
 * ---------------------------------------------------------------
 * APIData Component (RTK Query Version)
 * ---------------------------------------------------------------
 * - "use client" because RTK Query hooks run only on client side
 * - Demonstrates:
 *      ✓ How to call an RTK Query hook
 *      ✓ How to use loading and error states
 *      ✓ How to map over fetched API data
 *
 * - IMPORTANT:
 *      RTK Query automatically:
 *      • Caches API responses
 *      • Refetches when needed
 *      • Tracks loading/error states
 *      • Avoids unnecessary re-renders
 * ---------------------------------------------------------------
 */
const APIData = () => {
  /**
   * -------------------------------------------------------------
   * useGetUsersQuery()
   * -------------------------------------------------------------
   * - Auto-fetches data from /users
   * - Provides:
   *      data        → API response
   *      isLoading   → boolean while fetching
   *      error       → error object if request fails
   * -------------------------------------------------------------
   */
  const { data, isLoading, error } = useGetUsersQuery();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">Users From API</h2>

      {/* ---------------------------------------------------------
          Loading State
         --------------------------------------------------------- */}
      {isLoading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary"></div>
          <p className="mt-2">Fetching users...</p>
        </div>
      )}

      {/* ---------------------------------------------------------
          Error State
         --------------------------------------------------------- */}
      {error && (
        <div className="alert alert-danger text-center">
          Failed to load data.
        </div>
      )}

      {/* ---------------------------------------------------------
          Data List
         --------------------------------------------------------- */}
      <div className="row g-4">
        {!isLoading &&
          !error &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data?.map((user: any) => (
            <div className="col-md-4" key={user.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">{user.name}</h5>
                  <h6 className="card-subtitle mb-3 text-muted">
                    @{user.username}
                  </h6>

                  <p className="mb-1">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  <p className="mb-1">
                    <strong>City:</strong> {user.address.city}
                  </p>
                  <p className="mb-2">
                    <strong>Company:</strong> {user.company.name}
                  </p>

                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    className="btn btn-outline-primary btn-sm mt-2"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default APIData;
