import { useAuth } from 'oidc-react';

function Logged() {
    const auth = useAuth();

    return (
        <pre style={{textAlign: 'left'}}>
            {JSON.stringify(auth.userData, null, 2)}
        </pre>
    );
}

export default Logged;