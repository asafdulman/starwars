import { UserMessage } from "../types/userMessage.type";

interface UserNotificationProps {
    userMessage: UserMessage | null
}

export function UserNotification({ userMessage }: UserNotificationProps) {
    return (
        <div className={userMessage?.status === 'error' ? "error-message-modal-box" : "success-message-modal-box"}>
            <p>{userMessage?.message}</p>
        </div>
    )
}
