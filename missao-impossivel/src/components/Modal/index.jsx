import './style.css'

const Modal = (props) => {
    return (
        <div
            className="modal"
            style={{
                opacity: 1,
                visibility: 'visible'
            }}
        >
            <div
                className="modal_content"
                style={{
                    opacity: 1,
                    visibility: 'visible'
                }}
            >
                <span
                    className='modal_close'
                >
                    &times;
                </span>
                {props.children}  {/** renderiza tudo que for colocado dentro do Modal */}
            </div>
        </div>
    )
}

export default Modal //quando o componente é passado como default, não precisa importar com as chaves

export const ModalHeader = (props) => {
    return (
        <div className="modal_header">
            {props.children}
        </div>
    )
}

export const ModalBody = (props) => {
    return (
        <div className="modal_body">
            {props.children}
        </div>
    )
}