import { useState } from "react";
import { useContext, useRef } from "react";
import { addNewEmployee_action } from "../actions/dataActions";
import getId from "../functions/getId";
import inputsValidation from "../functions/inputsValidation";
import DataContext from "./DataContext";

function NewData() {

    const { dispachData } = useContext(DataContext)

    const nameRef = useRef();
    const ageRef = useRef();
    const selectRef = useRef();
    const [alert, setAlert] = useState(false)

    const addNewEmployee = () => {

        const name = inputsValidation('name', nameRef.current.value);
        const age = inputsValidation('age', ageRef.current.value);
        const city = selectRef.current.value;

        if (name && age && city) {
            dispachData(
                addNewEmployee_action({
                    id: getId(),
                    name,
                    age,
                    city,
                    deleted: false,
                    focus: false,
                    check: false
                }))
            setAlert(false)
            nameRef.current.value = "";
            ageRef.current.value = "";
            selectRef.current.value = "";
        } else {
            setAlert(true)
        }
    }

    return (
        <>
            {alert && <div>All inputs must be filled!</div>}
            <div className="inputs">
                <input className="name" ref={nameRef} placeholder="Name:" type="text" onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
                <input className="age" ref={ageRef} placeholder="Age:" type="number" onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />

                <select ref={selectRef}>
                    <option value="">Choose city</option>
                    <option value="Vilnius">Vilnius</option>
                    <option value="Kaunas">Kaunas</option>
                    <option value="Klaipeda">Klaipeda</option>
                </select>

                <button onClick={addNewEmployee}>Add employee</button>
            </div>
        </>
    )
}

export default NewData;