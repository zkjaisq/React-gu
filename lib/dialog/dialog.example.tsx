import React, {useState} from 'react';
import Dialog,{alert}from './dialog';
import './dialog.scss';


const iconexample: React.FunctionComponent = () => {
    const [x, setx] = useState(false);
    const [y, sety] = useState(false);
    return (
        <div>
            <div>
                <button onClick={() => {setx(!x);}}>clickme</button>
                <Dialog visible={x} bottons={
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
                <Dialog visible={y} bottons={
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
            </div>
        </div>

    );
};

Dialog.defaultProps = {
    clickMaskClose:false
}

export default iconexample;
