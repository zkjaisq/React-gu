import Icon from './icon';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const  fn :React.MouseEventHandler = (e)=> {
    console.log(e.target);
}

ReactDOM.render(
    <div>
        <Icon name='wechat' onClick={fn}/>
        <Icon name='ali' onClick={fn}/>
        <Icon name='qq' onClick={fn}/>
    </div>
   ,document.body.querySelector('#root'))
