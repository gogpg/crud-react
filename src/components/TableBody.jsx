import { useContext } from "react";
import DataContext from "./DataContext";

function TableBody() {

    const {data} = useContext(DataContext)
    return(
        <tbody>
            {data?.map(e => (
                 <tr key = {e.id}>
                    <td><input type='checkbox' onChange={()=> {}} checked={e.check}/></td>
                    <td>{e.name}</td>
                    <td>{e.age}</td>
                    <td>{e.city}</td>

                </tr>
            ))}
        </tbody>

    )
}
export default TableBody;