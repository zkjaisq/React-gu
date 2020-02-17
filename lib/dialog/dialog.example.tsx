import React, {useState} from 'react';
import Dialog,{alert,confirm,modal}from './dialog';
import './dialog.scss';


const iconexample: React.FunctionComponent = () => {
    const [x, setx] = useState(false);
    const [y, sety] = useState(false);
    const openModal = ()=>{
      const close =  modal(<h1>你好<button onClick={()=>{close()}}>close</button></h1>)
    }
    return (
        <div>
            <div>
                <button onClick={() => {setx(!x);}}>clickme</button>
                <Dialog visible={x} buttons={
                    [
                        <button onClick={() => {
                            setx(false);
                        }}>1</button>,
                        <button onClick={() => {
                            setx(false);
                        }}>2</button>]
                } onClose={() => {
                    setx(false);
                }} >

                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <button onClick={() => {sety(!y);}}>clickme2</button>
                <Dialog visible={y} buttons={
                    [
                        <button onClick={() => {
                            sety(false);
                        }}>1</button>,
                        <button onClick={() => {
                            sety(false);
                        }}>2</button>]
                } onClose={() => {
                    sety(false);
                }} clickMaskClose={true}>

                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <button onClick={() => alert('1')}>alert</button>
                <button onClick={() => confirm('1',()=>{
                    console.log('你点击了yes')
                },()=>{
                    console.log('你点击了no')
                })}>confirm</button>
            </div>
            <div>
                <h1>example</h1>
                <button onClick={openModal}>modal</button>
            </div>
        </div>

    );
};

Dialog.defaultProps = {
    clickMaskClose:false
}

export default iconexample;
