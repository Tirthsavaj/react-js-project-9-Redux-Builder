import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_RECORD, DELETE_RECORD, EDIT_RECORD } from "./action/action";

const App = () => {
  const record = useSelector((state) => state.crud.users);
  const dispatch = useDispatch();

  const [EmployeFirstName, setEmployeFirstName] = useState("");
  const [EmployeLastName, setEmployeLastName] = useState("");
  const [EmployeEmailId, setEmployeEmailId] = useState("");

  const handleSubmit = () => {
    const obj = {
      id: Math.floor(Math.random() * 100000),
      EmployeFirstName: EmployeFirstName,
      EmployeLastName: EmployeLastName,
      EmployeEmailId: EmployeEmailId,
    };
    dispatch(ADD_RECORD(obj));
    setEmployeFirstName("");
    setEmployeLastName("");
    setEmployeEmailId("");
  };

  const handleDelete = (id) => {
    dispatch(DELETE_RECORD(id));
  };

  const handleEdit = (id, newFirstName, newLastName, newEmail) => {
    const updatedData = {
      id: id,
      EmployeFirstName: newFirstName,
      EmployeLastName: newLastName,
      EmployeEmailId: newEmail,
    };
    dispatch(EDIT_RECORD(updatedData));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Employee Records</h1>

      <div style={styles.inputContainer}>
        <label style={styles.label}>First Name:</label>
        <input
          type="text"
          name="EmployeFirstName"
          style={styles.input}
          onChange={(e) => setEmployeFirstName(e.target.value)}
          value={EmployeFirstName}
        />
      </div>

      <div style={styles.inputContainer}>
        <label style={styles.label}>Last Name:</label>
        <input
          type="text"
          name="EmployeLastName"
          style={styles.input}
          onChange={(e) => setEmployeLastName(e.target.value)}
          value={EmployeLastName}
        />
      </div>

      <div style={styles.inputContainer}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          name="EmployeEmailId"
          style={styles.input}
          onChange={(e) => setEmployeEmailId(e.target.value)}
          value={EmployeEmailId}
        />
      </div>

      <button style={styles.button} onClick={handleSubmit}>
        Add Employee
      </button>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {record.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>
                <input
                  type="text"
                  value={val.EmployeFirstName}
                  onChange={(e) =>
                    handleEdit(val.id, e.target.value, val.EmployeLastName, val.EmployeEmailId)
                  }
                  style={styles.editInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={val.EmployeLastName}
                  onChange={(e) =>
                    handleEdit(val.id, val.EmployeFirstName, e.target.value, val.EmployeEmailId)
                  }
                  style={styles.editInput}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={val.EmployeEmailId}
                  onChange={(e) =>
                    handleEdit(val.id, val.EmployeFirstName, val.EmployeLastName, e.target.value)
                  }
                  style={styles.editInput}
                />
              </td>
              <td>
                <button style={styles.editButton} onClick={() => handleEdit(val.id, val.EmployeFirstName, val.EmployeLastName, val.EmployeEmailId)}>
                  Edit
                </button>
                <button style={styles.deleteButton} onClick={() => handleDelete(val.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  inputContainer: {
    marginBottom: "10px",
  },
  label: {
    marginRight: "10px",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    padding: "5px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  editInput: {
    padding: "5px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "100%",
  },
  editButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    marginRight: "5px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default App;
