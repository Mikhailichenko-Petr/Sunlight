import React from "react"
import { Disable } from "./disable"
import style from "./Order_status.module.css"

export const Order_status =({ isVisible = false, onClose })=>{

    const keydownHandler = ({ key }) => {
        switch (key) {
          case 'Escape':
            onClose();
            break;
          default:
        }
      };
    
      React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
      });
    
      return !isVisible ? null : (
        <div className={style.modal} onClick={onClose}>
          <div className={style.modal_dialog} onClick={e => e.stopPropagation()}>
            <div className={style.modal_header}>
              <h3 className={style.modal_title}><h1>Узнать статус заказа</h1></h3>
              <span className={style.modal_close} onClick={onClose}>
                &times;d
              </span>
            </div>
            <div className={style.modal_body}>
              <div className={style.modal_content}>
                  <h3>Номер заказа из смс</h3>
                  <Disable />
              </div>
            </div>
          </div>
        </div>
      );
}


