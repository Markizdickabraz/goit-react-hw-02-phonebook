import ListItem from "./listItem";
// import { nanoid } from "nanoid";

export default function ContactList({ items, onDeleteClick }) {
    // const id = nanoid();
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
