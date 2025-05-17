// Example login page using Supabase OAuth (GitHub)
// Feel free to duplicate this pattern for other providers or flows.

// import Navbar from '@/components/Navbar';
// import { supabase } from '@/lib/supabaseClient';

// export default function LoginPage() {
//   // Trigger Supabase GitHub OAuth login
//   const handleLogin = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({ provider: 'github' });
//     if (error) console.error('Login error:', error.message);
//   };

//   return (
//     <div>
//       <Navbar />
//       <main className="p-8">
//         <h1 className="text-2xl font-bold mb-4">Login</h1>
//         <p className="mb-4">Sign in using your GitHub account.</p>
//         <button
//           onClick={handleLogin}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//         >
//           Login with GitHub
//         </button>
//       </main>
//     </div>
//   );
// }
