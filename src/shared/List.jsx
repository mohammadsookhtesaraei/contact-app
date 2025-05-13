import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./List.module.css"
const List = ({data:{id,name,lastName,email,phone},deleteHandler}) => {
    return (
        <li className={styles.item}>
            <p>{name}{lastName}</p>
             <p>{email}</p>
             <p>{phone}</p>
             <button onClick={()=>deleteHandler(id)}><FaRegTrashAlt /></button>
        </li>
    );
}

export default List;
