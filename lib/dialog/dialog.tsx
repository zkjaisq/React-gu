import React, {Fragment} from 'react';
import {Icon} from '../index';

interface propsDialog {
    visible:Boolean,
}


function prefixClass(prefix:string) {
    return  (name?:string)=> {
        // return `jjui-dialog${name ? '-' + 'name' : ''}`
        return [prefix,name].filter(Boolean).join('-')
    }
}

const scopeClass = prefixClass('jjui-dialog')

const Dialog:React.FunctionComponent<propsDialog> = (props)=>{
    return(

        props.visible ?
            <Fragment>
                <div className={scopeClass('mask')}></div>
                <div className={scopeClass()}>
                    <div className={scopeClass('close')}>
                        <Icon name="close"/>
                    </div>
                   <header className={scopeClass('header')}>提示</header>
                    <main className={scopeClass('main')}>
                        {props.children}
                    </main>
                    <footer className={scopeClass('main')}>
                        <button>确定</button>
                        <button>取消</button>
                    </footer>

                </div>
            </Fragment>
            :
         null
    )
}

export default Dialog
