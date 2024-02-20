import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export const PopUpMessage = (message: string, duration: number) => Toastify({
  text: message,
  duration: duration,
  newWindow: true,
  close: true,
  gravity: 'bottom', 
  position: 'right',
  stopOnFocus: true, 
  style: {
    background: '#7648ff',
  },
}).showToast();