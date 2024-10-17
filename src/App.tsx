import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

const App: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Controla o formulário exibido

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {isSignUp ? (
          <SignUpForm />
        ) : (
          <LoginForm onSignUpClick={() => setIsSignUp(true)} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
