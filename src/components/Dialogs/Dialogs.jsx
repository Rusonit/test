import Class from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={Class.dialogs}>
      <div  className={Class.dialog}>
        <div> Bobby Bakala </div>
        <div> Jimmy Altierry </div>
        <div> Polly Gualtierry </div>
        <div> Silvio Dante </div>
        <div> Tony Soprano </div>
      </div>
      <div className={Class.messages}>    
        <div> Hey my brother! </div>
        <div> La salute! </div>
        <div> Whats up?! </div>
      </div>  
    </div>  
  )
};  

export default Dialogs;