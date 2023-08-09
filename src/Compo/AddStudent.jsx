import React from 'react'
import { useContext } from 'react'
import Data from './Data'
import { useNavigate } from 'react-router-dom';


const AddStudent = () => {
    const DataContext = useContext(Data)
    const nav = useNavigate();
    const newObj = {
        name: "",
        age: "",
        course: "",
        batch: ""
    }

    const handlechange = (e) => {
        newObj[e.target.name] = e.target.value;
    }

    const HandleSubmit = () => {
        DataContext.entries.push(newObj)
        nav(-1);
    }

    return (
        <>

            <div className='center'>
                <div className='main'>
                    <label> Name:  <input name="name" onChange={handlechange} placeholder='Entre your name'></input>
                    </label>
                    <label> Age: <input name="age" onChange={handlechange} placeholder='Entre your age'  ></input>
                    </label>
                </div>

                <div className='main'>
                    <label>Course:  <input name="course" onChange={handlechange} placeholder='Entre your course' ></input>
                    </label>
                    <label>Batch:   <input name="batch" onChange={handlechange} placeholder='Entre your batch'></input>

                    </label>
                </div>
            </div>
            <div className='update'>
                <button onClick={HandleSubmit}>Submit</button>
            </div>


        </>
    )
}

export default AddStudent;