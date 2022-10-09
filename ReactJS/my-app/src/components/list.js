import '../css/stylesheet.css';


function List({item}){

    item.id = 10;

    return (
        <li >
            <div>{item.id}</div>
            <div>{item.firstName}</div>
            <div>{item.lastName}</div>
            <div>{item.year}</div>
    </li>);
}

export default List;