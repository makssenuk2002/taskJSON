import './style.css'
import Content from "./Content";
import obj from "./data";
import {useState} from "react";




const App = () => {
    const [object, setObject] = useState(obj)
    const sortByProp = (property) => {
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {

            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }
    const sortObj = JSON.parse(JSON.stringify(obj))
    sortObj.products.sort(sortByProp('name'))


    return(
        <div>
            <button
                onClick={()=> object === obj ? setObject(sortObj) :setObject(obj) }
            >
                Filter by name
            </button>
            <Content
                obj={object}
            />
        </div>
    )
}
export default App