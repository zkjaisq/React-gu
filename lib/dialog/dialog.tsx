import React, {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
import ReactDOM from   'react-dom'
import {Icon} from '../index';

interface propsDialog {
    visible:Boolean,
    buttons?:Array<ReactElement>,
    onClose:React.MouseEventHandler,
    clickMaskClose?:Boolean
}


function prefixClass(prefix:string) {
    return  (name?:string)=> {
        // return `jjui-dialog${name ? '-' + 'name' : ''}`
        return [prefix,name].filter(Boolean).join('-')
    }
}

const scopeClass = prefixClass('jjui-dialog')
//考虑到需要进行的操作可能会出现dialog覆盖不住页面的情况，使用react.portal

const Dialog:React.FunctionComponent<propsDialog> = (props)=>{
    const onClickClose:React.MouseEventHandler = (e)=>{
        props.onClose(e)
    }
    const clickMaskClose:React.MouseEventHandler = (e)=>{
        if(props.clickMaskClose){
           props.onClose(e)
        }
    }
    const x =   props.visible ?
        <Fragment>
            <div className={scopeClass('mask')} onClick={clickMaskClose}></div>
            <div className={scopeClass()}>

                <header className={scopeClass('header')}>
                    提示
                    <div className={scopeClass('close')} onClick={onClickClose}>
                        <Icon name="close"/>
                    </div>
                </header>
                <main className={scopeClass('main')}>
                    {props.children}
                </main>
                <footer className={scopeClass('footer')}>
                    {
                       props.buttons &&  props.buttons.map((button, index) =>
                            React.cloneElement(button, {key: index})
                        )
                    }

                </footer>

            </div>
        </Fragment>
        :
        null
    return ReactDOM.createPortal(
        x,document.body
    )
}

const  alert = (content:string)=>{
    const component = <Dialog visible={true} buttons={
        [
            <button>1</button>,
            <button>2</button>
        ]
    } onClose={()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }}>{content}</Dialog>
    const div = document.createElement('div')
    ReactDOM.render(component,div)
}


const confirm = (content:string,success?:()=>void,fail?:()=>void)=>{
    const  onYes = ()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        success &&  success()
    }
    const onNo = ()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
        fail && fail()
    }
    const component = (
        <Dialog visible={true}
                onClose={()=>{
                    ReactDOM.render(React.cloneElement(component,{visible:false}),div)
                    ReactDOM.unmountComponentAtNode(div)
                    div.remove()
                }}
                buttons ={[
                    <button onClick={onYes}>yes</button>,
                    <button onClick={onNo}> no</button>
                ]}
    ></Dialog>)
    const div = document.createElement('div')
    ReactDOM.render(component,div)
}

const modal = (content:ReactNode | ReactFragment)=>{
    const close = ()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div);
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
    }
    const component = <Dialog visible={true}
    onClose={close}>{content}</Dialog>
    const div = document.createElement('div')
    ReactDOM.render(component,div)
    return close
}
export {alert,confirm,modal}

export default Dialog
