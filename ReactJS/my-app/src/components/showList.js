import List from "./list";

let myArray = ["one","two","three","four"];

let myObjectList = [
    {
        id: "1213",
        firstName: "Rahul",
        lastName: "Dravid",
        year: 1990
    },
    {
        id: "1213",
        firstName: "Rahul",
        lastName: "Dravid",
        year: 1990
    },
    {
        id: "1213",
        firstName: "Rahul",
        lastName: "Dravid",
        year: 1990
    },
    {
        id: "1213",
        firstName: "Rahul",
        lastName: "Dravid",
        year: 1990
    },
    {
        id: "1213",
        firstName: "Rahul",
        lastName: "Dravid",
        year: 1990
    },

]
function ShowList() {
    return (
        <ul>{
            // Whatever we pass here get attached to "props" object
            // Components can refer to other Components
            myObjectList.map( itemValue => (<List key={itemValue.id} item={itemValue} />)
            )}


        </ul>
    );
}


export default ShowList;