// email.js
import emailjs from '@emailjs/browser';

export const sendEmail = (templateParams : any) => {
  console.log(" process.env.REACT_APP_EMAILJS_SERVICE_ID", process.env.REACT_APP_EMAILJS_SERVICE_ID);
  return emailjs.send(
     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY    
  );
};
