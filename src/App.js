import './App.css';

import Logged from "./Logged.js"

import { AuthProvider } from 'oidc-react';

const oidcConfig = {
  onSignIn: (_) => {},
  clientId: 'client',
  redirectUri: 'http://localhost:3000/',
  authority: 'http://localhost:8080/auth/realms/openid-demo/.well-known/openid-configuration',
};

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <pre>
          <Logged />
        </pre>
      </div>
    </AuthProvider>
  );
}

export default App;
