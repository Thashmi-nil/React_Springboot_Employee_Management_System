import React from 'react'

export default function Report() {
    return (
        <div>
            <h1 style={{ marginTop: '50px', marginBottom: '50px' }}>Report</h1>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th> Employee First Name</th>
                            <th> Employee Last Name</th>
                            <th> Employee Email Id</th>
                            <th> Income</th>
                            <th> Expences</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> Kevin</td>
                            <td> Nugera</td>
                            <td> E0001</td>
                            <td> $50000</td>
                            <td> $120</td>
                        </tr>
                        <tr>
                            <td> Supun</td>
                            <td> Perera</td>
                            <td> E0002</td>
                            <td> $45000</td>
                            <td> $780</td>
                        </tr>
                        <tr>
                            <td> Piyumi</td>
                            <td> Nayanathara</td>
                            <td> E0003</td>
                            <td> $75000</td>
                            <td> $450</td>
                        </tr>
                        <tr>
                            <td> Kusum</td>
                            <td> Silva</td>
                            <td> E0004</td>
                            <td> $50000</td>
                            <td> $790</td>
                        </tr>
                        <tr>
                            <td> Dasuni</td>
                            <td> Perera</td>
                            <td> E0005</td>
                            <td> $66600</td>
                            <td> $230</td>
                        </tr>
                        <tr>
                            <td> Waruni</td>
                            <td> Sithara</td>
                            <td> E0006</td>
                            <td> $88800</td>
                            <td> $111</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" style={{ width: "200px" }}>Print</button></div>
            </div>
        </div>
    )
}
