import { useSession, signIn } from "next-auth/react"
import styles from './styles.module.scss';

interface SubscripeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscripeButtonProps) {

    const { data: session, status } = useSession();

    function handleSubcribe() {
        if(!session){
            signIn('github');
            return;
        }

        
    }

    return (
        <button
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>
    )
}