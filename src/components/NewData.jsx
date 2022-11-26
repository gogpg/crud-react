import { useContext, useRef } from "react";
import { addNewEmployee_action } from "../actions/dataActions";
import getId from "../functions/getId";
import DataContext from "./DataContext";

function NewData() {

    const { dispachData } = useContext(DataContext)

    const nameRef = useRef();
    const ageRef = useRef();
    const selectRef = useRef();

    const addNewEmployee = () => {

        let name = nameRef.current.value;
        let age = ageRef.current.value;
        let city = selectRef.current.value;

        if (name && age && city) {
            dispachData(addNewEmployee_action({
                id: getId(),
                name: name[0].toUpperCase() + name.slice(1),
                age,
                city,
                deleted: false,
                focus: false,
                check: false
            }))
            name = "";
            age = "";
            city = "";
        }
    }

    return (
        <div>

            <input ref={nameRef} placeholder="Name" type="text" onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />
            <input ref={ageRef} placeholder="Age" type="number" onKeyUp={e => e.key === 'Enter' && addNewEmployee()} />

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