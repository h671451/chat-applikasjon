import { useState } from "react"
import axios from "axios";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginAsGuest = () => {
        // Set the username and password to the guest credentials
        setUsername("gjest");
        setPassword("123456");
    };

    const handleAdminLogin = () => {
        // Set the username and password to the guest credentials
        setUsername("dathuynh");
        setPassword("123456");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID' : "c50e693b-8815-4d7b-bbde-a354736259c3", 'User-Name': username, 'User-Secret': password};

        try {
            // username | password => chatengine -> gives messages
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});
            // works out -> logged inn

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();

        } catch (error) {
            // error -> try with new username or password...
            setError('Incorrect credentials')
            
        }
    }

    return (
         <div className="wrapper">
            <div className = "form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align  = "center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
                <div align="center">
                    <button onClick={handleLoginAsGuest} className="button">
                        <span>Login as Guest</span>
                    </button>
                </div>
                <div align="center">
                    <button onClick={handleAdminLogin} className="button">
                        <span>Login Dat Huynh(Admin)</span>
                    </button>
                </div>
            </div>
         </div>
    );
}

export default LoginForm;