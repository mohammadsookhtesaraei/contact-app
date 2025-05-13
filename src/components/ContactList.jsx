
import List from "../shared/List";
import styles from "./ContactList.module.css"
const ContactList = ({contacts,deleteHandler}) => {
 

    
    return (
        <div className={styles.container}>
            <h3>Contact List</h3>
            {contacts.length ? (
                contacts.map((item)=>(
                   <ul className={styles.contact} key={item.id}>
                    <List data={item} deleteHandler={deleteHandler}/>
                   </ul>
                ))
            ) :(
            <p className={styles.message}>NotContact Yet.</p>
            )}
        </div>
    );
}

export default ContactList;
