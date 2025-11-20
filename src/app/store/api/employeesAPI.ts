import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface APIUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export const employeesApi = createApi({
  reducerPath: "employeesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Employees"],

  endpoints: (builder) => ({
    getUsers: builder.query<APIUser[], void>({
      query: () => "/users",
      providesTags: ["Employees"],
    }),

    addUser: builder.mutation<APIUser, Partial<APIUser>>({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Employees"],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = employeesApi;
