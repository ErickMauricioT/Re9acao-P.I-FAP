import React, { useState } from 'react';

const SignUpForm: React.FC = () => {
 const [email, setEmail] = useState('');
 const [cpfCnpj, setCpfCnpj] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log({ email, cpfCnpj, password });
  
 };

 return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
   <div className="w-full max-w-md p-6 md:p-8 space-y-4 bg-customBlue rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-center text-white">Crie o seu Perfil!</h2>
    <form onSubmit={handleSubmit} className="space-y-6">
     <div>
      <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
      <input
       type="email"
       id="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-white bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
       required
      />
     </div>
     <div>
      <label htmlFor="cpfCnpj" className="block text-sm font-medium text-white">CPF/CNPJ</label>
      <input
       type="text"
       id="cpfCnpj"
       value={cpfCnpj}
       onChange={(e) => setCpfCnpj(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-white bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
       required
       pattern="\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2}"
       placeholder="Digite o CPF ou CNPJ"
      />
     </div>
     <div>
      <label htmlFor="password" className="block text-sm font-medium text-white">Senha</label>
      <input
       type="password"
       id="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       className="block w-full px-4 py-2 mt-2 text-white bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
       required
      />
     </div>
     <button
      type="submit"
      className="w-40 px-4 py-2 ml-28 text-white bg-customGren rounded-md hover:bg-green-600 focus:bg-green-700 focus:outline-none"
     >
      Criar Conta
     </button>
    </form>
   </div>
  </div>
 );
};

export default SignUpForm;