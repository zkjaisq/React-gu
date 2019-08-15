// 为什么要引入react的原因，下面的div是一个语法糖，和上面的注释的语法相同。
import React from 'react'
function Button(){
    return(
    //  React.createElement('div',null,'button1')
    <div>button2</div>
    )
}
export default Button;