import './style.css'

const Modal = (props) => {
    return (
        <div
            className="modal"
            style={{
                opacity: props.show ? 1 : 0,
                visibility: props.show ? 'visible' : 'hidden'
            }}
        >
            <div
                className="modal_content"
                style={{
                    opacity: props.show ? 1 : 0,
                    visibility: props.show ? 'visible' : 'hidden'
                }}
            >
                <span
                onClick={() => props.setShow(false)}
                    className='modal_close'
                >
                    &times; {/** "x" do Modal */}
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