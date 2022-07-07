import { useSession, signIn } from "next-auth/react"
import { api } from "../../services/api";
import styles from './styles.module.scss';

interface SubscripeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscripeButtonProps) {

    const { data: session, status } = useSession();

    async function handleSubscribe() {
        if (!session) {
            signIn('github');
            return;
        }

        try {
            const response = api.post('/subscribe');

            const { sessionId } = response.data;
        } catch (error) {

        }
    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}