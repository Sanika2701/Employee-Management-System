import React, { useEffect, useState } from 'react';
import { listEmployees, deleteEmployee } from '../services/EmpService'; // Ensure deleteEmployee is exported from your service
import { useNavigate } from 'react-router-dom';

function EmpListComponent() {
    const [emp, setEmp] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        // Fetch employee data when the component mounts
        listEmployees()
            .then((response) => {
                setEmp(response.data); // Set fetched employees data
            })
            .catch((error) => {
                console.error(error); // Handle error
            });
    }, []);

    // Navigate to the Add Employee page
    function addEmp() {
        navigator("/add-emp");
    }

    // Navigate to the Edit Employee page
    function updateEmployee(id) {
        navigator(`/edit-emp/${id}`);
    }

    // Delete employee by id
    function deleteEmp(id) {
        // Call the deleteEmployee function from your service
        deleteEmployee(id)
            .then((response) => {
                // If successful, remove the deleted employee from the state
                setEmp(emp.filter(employee => employee.eid !== id));
                console.log('Employee deleted successfully');
            })
            .catch((error) => {
                console.error('Error deleting employee', error); // Handle delete error
            });
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-6 offset-3 border shadow'>
                    <button className='btn btn-info mt-2' onClick={addEmp}>Add Emp</button><br />

                    <h2 className='display-4 text-center'>Employee Data</h2>

                    <table className='table bg-secondary text-light table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Mobile No</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                emp.map((employee) => (
                                    <tr key={employee.eid}>
                                        <td>{employee.eid}</td>
                                        <td>{employee.ename}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.mono}</td>
                                        <td>
                                            <button className='btn btn-success' onClick={() => updateEmployee(employee.eid)}>Update</button>
                                            <button className='btn btn-danger' onClick={() => deleteEmp(employee.eid)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default EmpListComponent;
