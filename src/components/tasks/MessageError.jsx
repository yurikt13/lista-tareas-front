const MessageError = ({ setError }) => {
    return (
        <div className={setError ? 'conError' : 'sinError'}>Todos los campos son obligatorios.</div >
    )
}
export default MessageError