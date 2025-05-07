import { useState } from "react";
import { inputs } from "../constant/inputs";

import { v4 as uuidv4 } from 'uuid';

const Contacts = () => {
    const [contact,setContact]=useState({
        id:"",
        name:"",
        lastName:"",
        email:"",
        phone:""
    });

    const [contacts,setContacts]=useState([]);
    const [alert,setAlert]=useState("")

    const changeHandler=(event)=>{
        const {value,name}=event.target;
        setContact((prevContact)=>({...prevContact,[name]:value}))
    };

    const addHandler=()=>{
        if(!contact.name ||!contact.lastName || !contact.email ||!contact.phone){
            setAlert("Please insert validData!");
            return;
        }
        setAlert("");
        const newContact={...contact,id:uuidv4()}
        setContacts((prevContacts)=>([...prevContacts,newContact]));
        setContact({
        id:"",
        name:"",
        lastName:"",
        email:"",
        phone:""
        });
    }


    return (
        <div>
            <div>
                {inputs.map((item,index)=>(
                    <input key={index} type={item.type} name={item.name} value={contact[item.name]} placeholder={item.placeHolder} onChange={changeHandler}/>
                ))}
                <button onClick={addHandler}>AddContacs</button>
            </div>
         
            <div>
            {alert && <p>{alert}</p>}
            </div>
        </div>
    );
}

export default Contacts;
