import { FaRegTrashAlt } from "react-icons/fa";

const List = ({data:{id,name,lastName,email,phone},deleteHandler}) => {
    return (
        <li>
            <p>{name}</p>
            <p>{lastName}</p>
             <p>{email}</p>
             <p>{phone}</p>
             <button onClick={()=>deleteHandler(id)}><FaRegTrashAlt /></button>
        </li>
    );
}

export default List;
