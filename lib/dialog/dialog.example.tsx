import React,{useState} from 'react'
import Dialog from './dialog'
import './dialog.scss'
const iconexample:React.FunctionComponent = ()=>{
    const [x,setx] = useState(true)
    return (
        <div>
            <button onClick={()=>{setx(!x)}}>clickme</button>
            <Dialog visible={x}>
                <div>hi</div>
            </Dialog>
        </div>
    )
}

export default iconexample
