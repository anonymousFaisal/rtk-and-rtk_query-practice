import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/**
 * -------------------------------------------------------------------
 * APIUser Interface
 * -------------------------------------------------------------------
 * Defines the shape of the user data returned by the API.
 * Helps TypeScript auto-type all query/mutation responses and hooks.
 */
export interface APIUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

/**
 * -------------------------------------------------------------------
 * employeesApi
 * -------------------------------------------------------------------
 * This is your RTK Query API slice.
 *
 * - reducerPath:   The key under which RTK Query stores its cache in the Redux store.
 * - baseQuery:     Default HTTP client (fetchBaseQuery is a small wrapper over fetch()).
 * - tagTypes:      Used for cache invalidation (refetch after POST/PUT/DELETE).
 * - endpoints:     Your API routes (queries + mutations).
 *
 * RTK Query auto-generates:
 * - React hooks (useGetUsersQuery, useAddUserMutation)
 * - loading, success, error state management
 * - request deduplication + smart caching
 * -------------------------------------------------------------------
 */
export const employeesApi = createApi({
  // 🧠 This becomes state.employeesApi in the Redux store
  reducerPath: "employeesApi",

  // 🧠 Base API URL for every endpoint below
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  // 🧠 Tags let RTK Query know how to invalidate (refresh) cached data
  tagTypes: ["Employees"],

  // -----------------------------------------------------------------
  // Endpoints: All API routes go inside here (queries & mutations)
  // -----------------------------------------------------------------
  endpoints: (builder) => ({

    /**
     * ---------------------------------------------------------------
     * GET /users
     * ---------------------------------------------------------------
     * - builder.query  → for GET requests
     * - returns: APIUser[]
     * - void means: no argument required
     * - providesTags → caches this endpoint under "Employees"
     * ---------------------------------------------------------------
     */
    getUsers: builder.query<APIUser[], void>({
      query: () => "/users",

      // Meaning:
      // "This query provides the Employees tag"
      // → so any mutation that invalidates Employees will refetch this query
      providesTags: ["Employees"],
    }),

    /**
     * ---------------------------------------------------------------
     * POST /users
     * ---------------------------------------------------------------
     * - builder.mutation → for POST, PUT, DELETE
     * - invalidatesTags → tells RTKQ to refetch getUsers after adding
     * ---------------------------------------------------------------
     */
    addUser: builder.mutation<APIUser, Partial<APIUser>>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),

      // Meaning:
      // "When addUser runs, refetch all Employees-related queries"
      invalidatesTags: ["Employees"],
    }),
  }),
});

/**
 * -------------------------------------------------------------------
 * Export Auto-Generated Hooks
 * -------------------------------------------------------------------
 * RTK Query automatically creates:
 *  - useGetUsersQuery()
 *  - useAddUserMutation()
 *
 * These hooks include:
 *   data, error, isLoading, isFetching, isSuccess
 *   trigger function for mutations
 *   caching & deduping logic
 * -------------------------------------------------------------------
 */
export const { useGetUsersQuery, useAddUserMutation } = employeesApi;
