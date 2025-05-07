
import List from "../shared/List";

const ContactList = ({contacts,deleteHandler}) => {
 

    
    return (
        <div>
            <h1>Contact List</h1>
            {contacts.length ? (
                contacts.map((item)=>(
                   <ul key={item.id}>
                    <List data={item} deleteHandler={deleteHandler}/>
                   </ul>
                ))
            ) :(
            <p>NotContact Yet.</p>
            )}
        </div>
    );
}

export default ContactList;
