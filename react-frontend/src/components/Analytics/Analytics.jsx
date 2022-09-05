import React from 'react'
import { Chart } from "react-google-charts";

export default function Analytics() {

    const data1 = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2018", 1000, 400, 200],
        ["2019", 1170, 460, 250],
        ["2020", 660, 1120, 300],
        ["2021", 1030, 540, 350],
    ];

    const options1 = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2018-2021",
        },
    };
    const data2 = [
        [
            "Day",
            "Full-Time Employees.",
            "Part-Time Employees",
            "Temporary Employees",
        ],
        ['Jan', 378, 808, 418],
        ['Feb', 309, 695, 324],
        ['Mar', 254, 57, 25.],
        ['Apr', 117, 188, 105],
        ['May', 119, 176, 104],
        ['Jun', 88, 136, 77],
        ['Jul', 76, 123, 96],
        ['Aug', 123, 292, 106],
        ['Sep', 169, 429, 148],
        ['Oct', 128, 309, 116],
        ['Nov', 128, 203, 116],
        ['Dec', 258, 309, 111],

    ];

    const options2 = {
        chart: {
            title: "Employee Population",
            subtitle: "counts",
        },
    };
    return (
        <div >
            <h1 style={{ marginTop: '50px', marginBottom: '50px' }}>Analytics</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '50px' }}>
                <div style={{ width: '500px' }}>
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={data1}
                        options={options1}
                    />
                </div>

                <div style={{ width: '500px' }}>
                    <Chart
                        chartType="Line"
                        width="100%"
                        height="400px"
                        data={data2}
                        options={options2}
                    />
                </div>
            </div>
        </div>
    )
}
