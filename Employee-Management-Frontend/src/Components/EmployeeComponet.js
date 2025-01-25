import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmpService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponet = () => {

    const [eid, setEid] = useState("");
    const [ename, setEname] = useState("");
    const [salary, setSalary] = useState("");
    const [mono, setMono] = useState("");
    const { id } = useParams();

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {

                setEid(response.data.eid);
                setEname(response.data.ename);
                setMono(response.data.mono);
                setSalary(response.data.salary);

            }).catch((error) => {
                console.log(error);
            })
        }
    }, [id]);

    function saveorUpdateEmp(e) {
        e.preventDefault();
        const employee = { eid, ename, salary, mono };
        console.log(employee);

        if (id) {
            updateEmployee(id, employee).then((response) => {
                console.log(response.data);
                navigator("/");
            }).catch((error) => {
                console.log(error);
            })
        }

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator("/");
        }).catch((error) => {
            console.log(error);
        })
    }

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Edit Employee</h2>
        }
        else {
            console.log(id);
            return <h2 className='text-center'>Add Employee</h2>
        }
    }
    return (
        <div className='col-5 offset-4 border p-4 shadow'>
            {
                pageTitle()
            }
            <form>
                <input type='text' className='form-control mb-3' placeholder='Enter Id'
                    value={eid} onChange={(e) => { setEid(e.target.value) }}
                />
                <input type='text' className='form-control mb-3' placeholder='Enter Name'
                    value={ename} onChange={(e) => { setEname(e.target.value) }}
                />
                <input type='text' className='form-control mb-3' placeholder='Enter Salary'
                    value={salary} onChange={(e) => { setSalary(e.target.value) }}
                />
                <input type='text' className='form-control mb-3' placeholder='Enter Mobile No'
                    value={mono} onChange={(e) => { setMono(e.target.value) }}
                />
                <input type='submit' className='btn btn-success w-100'
                    onClick={saveorUpdateEmp}
                ></input>
            </form>
        </div>
    )
}

export default EmployeeComponet
