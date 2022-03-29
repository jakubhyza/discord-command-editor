import React from 'react';
import style from "./Modal.module.css";

function Modal(props){
    return(
        <div className={style.Wrap} onClick={props.close}>
            <div className={style.Content} onClick={e=>{e.stopPropagation();}}>
                {props.children}
            </div>
        </div>
    );
}

export default Modal;