import React, { Component, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
// import '../components/LandingPage/LandingPage.css'

export default class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        })
    }
    addEmployee() {
        this.props.history.push('/add-employee/_add');
    }
    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }
    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
        });
    }
    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
    }

    render() {
        // const [nav, setnav] = useState(false);

        return (
            <>
                <nav className="">
                    <ul className=''>
                        <li><a href='/analytics' smooth={true} duration={1000}>Analytics</a></li>
                    </ul>
                    <ul className=''>
                        <li><a href='/report' smooth={true} duration={1000}>Reports</a></li>
                    </ul>
                </nav>
                <div>
                    <h2 className="text-center" style={{ marginTop: '20px' }}>Employee List</h2>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addEmployee} style={{ width: "200px" }}> Add Employee</button>
                    </div>
                    <br></br>
                    <div className="row">
                        <table className="table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee First Name</th>
                                    <th> Employee Last Name</th>
                                    <th> Employee Email Id</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee =>
                                            <tr key={employee.id}>
                                                <td> {employee.firstName} </td>
                                                <td> {employee.lastName}</td>
                                                <td> {employee.emailId}</td>
                                                <td>
                                                    <button onClick={() => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewEmployee(employee.id)} className="btn btn-warning" >View </button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
