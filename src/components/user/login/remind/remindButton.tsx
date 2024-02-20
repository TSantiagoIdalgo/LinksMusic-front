import Style from './remindButton.module.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

interface RemindButtonProps {
    remind: boolean;
    setRemind: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const RemindButton: React.FC<RemindButtonProps> = ({ remind, setRemind }) => {
  return (
    <div className={Style.login_remind_buttons}>
      <div className={`${remind ? Style.login_remind_active : Style.login_remind_button}`}>
        <button type='button' onClick={() => setRemind(!remind)}>
          <i/>
        </button>
        <span>Remind me</span>
      </div>
      <NavLink to={'/'} className={Style.login_forgot}>Forgot password?</NavLink>
    </div>
  );
};

export default RemindButton;