const MessageError = ({error}) => {
    return (
        <div className={error ? 'conError' : 'sinError'}>Todos los campos son obligatorios.</div >
    )
}
export default MessageError