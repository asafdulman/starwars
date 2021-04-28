
interface Props {
    filmTitle: string
}

export function ErrorMessage({ filmTitle }: Props) {
    return (
        <div className="error-message-modal-box">
            <p>{filmTitle} is already a favorite film!</p>
        </div>
    )
}
