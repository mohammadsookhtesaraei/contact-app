import { useState } from "react";
import { inputs } from "../constant/inputs";

import { v4 as uuidv4 } from 'uuid';
import ContactList from "./ContactList";

import styles from "./Contacts.module.css"

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
    };

    const deleteHandler=(id)=>{
        const newContacts=contacts.filter((item)=> item.id !== id);
        setContacts(newContacts);
    }


    return (
        <div className={styles.container}>
            
            <div className={styles.form}>
              
               {inputs.map((item,index)=>(
                    <input key={index} type={item.type} name={item.name} value={contact[item.name]} placeholder={item.placeHolder} onChange={changeHandler}/>
                ))}
              
                <button onClick={addHandler}>AddContacs</button>
            </div>
         
            <div className={styles.alert}>
            {alert && <p>{alert}</p>}
            </div>
            <ContactList contacts={contacts} deleteHandler={deleteHandler}/>
        </div>
    );
}

export default Contacts;
