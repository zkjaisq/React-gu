import * as React from 'react'
interface IconProps {
    name:string;
}
const Icon:React.FunctionComponent<IconProps> = (props)=> {
    return(
        <span>{props.name}</span>
    )
}


// function Icon1<T>(pros:IconProps<T>) {
//     return(
//         <span>icon</span>
//     )
// }


export default Icon;
