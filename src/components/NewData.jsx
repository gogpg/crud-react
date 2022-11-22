import { useRef } from "react";

function NewData() {

    const nameRef = useRef();
    const ageRef = useRef();
    const selectRef = useRef();
  
    // const test = () => {
    //     console.log({
    //         name: nameRef.current.value,
    //         age: ageRef.current.value,
    //         city: selectRef.current.value
    //     })
    // }

    const add = () => {
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

            <button onClick={add}>Add amployee</button>

        </div>
    )
}

export default NewData;