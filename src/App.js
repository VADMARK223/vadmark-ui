/**
 * @author Markitanov Vadim
 * @since 21.01.2023
 */
import {useEffect, useState} from "react";

const App = (props) => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    useEffect(()=> {
        setTimeout(()=>{
            setData({});
        }, 100);
    }, []);

    const handlerClick = ()=> {
        setToggle(!toggle);
    }

    return (
        <div>
            <div data-testid={'input-value'}>{value}</div>
            {toggle === true && <div data-testid={'toggle-div-id'}>Toggle</div>}
            {data && <div>Data</div>}
            <h1>Hello world</h1>
            <button data-testid={'toggle-button-id'} onClick={handlerClick}>Click me</button>
            <input data-testid={'input-id'} type={'text'} placeholder={'input value..'} onChange={e=>setValue(e.target.value)}/>
        </div>
    )
}

export default App;