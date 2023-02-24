import ListItem from "./listItem";


export default function ContactList({ items, onDeleteClick }) {

    // console.log(stateContacts);
    // const deleteButtonClick = ({ stateContacts }) => {
        
    // }
    
    return (
        <ul>
            {items.map(item => 
            (
                <ListItem key={item.name}
                    name={item.name} number={item.number} deleteClick = {onDeleteClick} ></ListItem>
            )
                )}
        </ul>
    )
}
//   {items.map(item => 
//             (<li key={item.name}
//             > {item.name}: {item.number}</li>)
//                 )}