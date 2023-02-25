

export default function ListItem({ name, number, deleteClick}) { 

    return (
        <li key={name}> <span> {name} : {number}</span> <button type="button" onClick = {()=>{deleteClick(name)}}>Delete</button></li>
    )
}
    