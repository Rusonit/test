import Class from './Dialogs.module.css';

const Message = (props) => {
  return (
  <div className={Class.messages}> {props.message} </div>
  );
}  

export default Message;