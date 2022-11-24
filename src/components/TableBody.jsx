import { useContext } from "react";
import { checkEmplyee_action } from "../actions/dataActions";
import DataContext from "./DataContext";

function TableBody() {

    const {data, dispachData, setIsCheck} = useContext(DataContext)

    const check = (id, e) => {
        const c = e.target.checked;
        dispachData(checkEmplyee_action(id, c))

        if (!c) {
            setIsCheck(c)
        }
    }

    return(
        <tbody>
            {data?.map(e => {
                return (
                <tr key = {e.id}>
                    <td><input type='checkbox' onChange={event => check(e.id, event) } checked={e.check}/></td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.city}</td>

                </tr>
                )
})}
        </tbody>

    )
}
export default TableBody;