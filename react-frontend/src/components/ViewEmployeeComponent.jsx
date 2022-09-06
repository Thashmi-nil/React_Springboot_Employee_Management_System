import React, { Component, useState } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount() {
        console.log('hi');
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({ employee: res.data });
        })
    }
    cancel() {
        this.props.history.push('/employees');
    }

    render() {

        return (
            <>
                <div>
                    <br></br>
                    <div className="card col-md-6 offset-md-3" style={{ padding: '20px' }}>
                        <h3 className="text-center"> View Employee Details</h3>
                        <div className="card-body" >
                            <div className="row">
                                <label> Employee First Name : <span style={{ color: "#7f838b" }}> {this.state.employee.firstName}</span></label>
                                <div> </div>
                            </div>
                            <div className="row">
                                <label> Employee Last Name : <span style={{ color: "#7f838b" }}>{this.state.employee.lastName}</span></label>
                                <div> </div>
                            </div>
                            <div className="row">
                                <label> Employee Email ID : <span style={{ color: "#7f838b" }}>{this.state.employee.emailId}</span></label>
                                <div> </div>
                            </div>
                        </div>
                        <div style={{ alignContent: 'right' }}>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Back</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
