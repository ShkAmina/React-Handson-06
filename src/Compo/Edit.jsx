import React, { useContext } from 'react'
import Data from './Data'
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {

    const DataContext = useContext(Data);
    
    const nav = useNavigate();
    const loc = useLocation().state.data

    const currData = {
        name: DataContext.entries[loc].name,
        age: DataContext.entries[loc].age,
        course: DataContext.entries[loc].course,
        batch: DataContext.entries[loc].batch,
    }

    const handlechange = (e) => {
        currData[e.target.name] = e.target.value;
    }

    const HandleSubmit = () => {
        DataContext.entries[loc] = currData;
        nav(-1);
    }
    return (
        <>

            <div className='center'>
                <div className='main'>
                <label> Name:  <input name="name" onChange={handlechange} placeholder={DataContext.entries[loc].name}></input>
                </label>
                <label> Age: <input name="age" onChange={handlechange} placeholder={DataContext.entries[loc].age} ></input>
                </label>
                </div>

                <div className='main'>
                <label>Course:  <input name="course" onChange={handlechange} placeholder={DataContext.entries[loc].course}></input>
                </label>
                <label>Batch:   <input name="batch" onChange={handlechange} placeholder={DataContext.entries[loc].batch}></input>

                </label>
                </div>
            </div>
            <div className='update'>
            <button onClick={HandleSubmit}>Update</button>
            </div>
        </>
    )
}

export default Edit