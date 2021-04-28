
interface Props {
    message: string
}

export function ErrorMessage({ message }: Props) {
    return (
        <div className="error-message-modal-box">
            <p>{message}</p>
        </div>
    )
}
