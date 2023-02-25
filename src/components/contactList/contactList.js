import ListItem from "../listItem/listItem";
// import { nanoid } from "nanoid";
import PropTypes, { any } from 'prop-types';


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

ListItem.PropTypes = {
    item: PropTypes.objectOf(any),
    onDeleteClick: PropTypes.func
} 