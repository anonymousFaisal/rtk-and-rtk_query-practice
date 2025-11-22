# RTK and RTK Query Practice

A Next.js application designed to practice and demonstrate state management using **Redux Toolkit (RTK)** and data fetching with **RTK Query**.

## 🚀 Features

This project showcases two main approaches to state management side-by-side:

### 1. Standard Redux Toolkit (Slices)

- **Employee Management**:
  - Add new employees.
  - View a list of employees.
  - Delete employees.
- **Student Management**:
  - View a list of students.

### 2. RTK Query (API Slices)

- **API Data Fetching**:
  - Fetches and caches data from an external API using RTK Query.
  - Demonstrates auto-generated hooks and cache management.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Data Fetching**: [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- **Styling**: [React Bootstrap](https://react-bootstrap.github.io/) & Bootstrap 5

## 📂 Project Structure

- **`src/app/store`**: Contains the Redux store configuration.
  - **`slices/`**: Standard RTK slices (`employeeSlice`, `studentSlice`).
  - **`api/`**: RTK Query API definitions (`employeesAPI`).
  - **`store.ts`**: Main store setup combining reducers and middleware.
- **`src/app/components`**: UI components interacting with the store (`AddEmployees`, `ShowEmployees`).

## 🏁 Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Usage

- **Home Page**: Add and view employees.
- **Delete Employee**: Navigate to `/delete-employee` to remove entries.
- **Show Students**: Navigate to `/students` to view student data.
- **Show API**: Navigate to `/api-data` to see RTK Query in action.
