
export default function ListItem({ name, number, deleteClick}) { 

    return (
        <li onClick ={deleteClick} id = {name}> <span> {name} : {number}</span> <button type="button" >Delete</button></li>
    )
}

            //     {items.map(item => 
            // (<li key={item.name}
            // > {item.name}: {item.number}</li>)
            //     )}