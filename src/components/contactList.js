

export default function ContactList({items}) {
    return (
        <ul>
            {items.map(item => 
            (<li key ={item.name}>{item.name}: {item.number}</li>)
                )}
        </ul>
    )
}