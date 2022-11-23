import { useContext, useRef } from "react";
import { addNewEmployee_action } from "../actions/dataActions";
import getId from "../functions/getId";
import DataContext from "./DataContext";

function NewData() {

    const {dispachData} = useContext(DataContext)

    const nameRef = useRef();
    const ageRef = useRef();
    const selectRef = useRef();

    const addNewEmployee = () => {

        dispachData(addNewEmployee_action({
            id: getId(),
            name: nameRef.current.value,
            age: ageRef.current.value,
            city: selectRef.current.value,
            deleted: false,
            focus: false,
            check: false
    }))
        nameRef.current.value = "";
        ageRef.current.value = "";
        selectRef.current.value = "";
    }

    return(
        <div>
        
            <input ref={nameRef} placeholder="name" type="text"/>
            <input ref={ageRef} placeholder="age" type="number"/>

            <select ref={selectRef}>
                <option value="">Choose city</option>
                <option value="Vilnius">Vilnius</option>
                <option value="Kaunas">Kaunas</option>
                <option value="Klaipeda">Klaipeda</option>
            </select>

            <button onClick={addNewEmployee}>Add employee</button>
            
        </div>
    )
}

export default NewData;