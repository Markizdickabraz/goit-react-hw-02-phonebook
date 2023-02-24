import ListItem from "./listItem";


export default function ContactList({ items, onDeleteClick }) {

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
