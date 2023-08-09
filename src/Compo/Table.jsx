import React, { useContext } from "react";
import Data from "./Data";
import { useNavigate , Link } from "react-router-dom";
import Navigate from "./Navigate";

const Table = () => {
    const DataContext = useContext(Data);
    const nav = useNavigate();
    return (
        <>
        <Navigate/>
        <br/>
            <br/>
            <div className="btn">
            <h1>Student Details</h1>
            <button onClick={() => { nav('/addnew') }}>Add Student</button>
            </div>
            <br/>
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>

{DataContext.entries.map((item,index)=>(
    <tr key={index}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.course}</td>
        <td>{item.batch}</td>
        <td>
          
            <Link to ='/editStudent' state={{data:index}}>Edit</Link>
        </td>
    </tr>
))
}
                </tbody>
            </table>

        </>
    )
}

export default Table;