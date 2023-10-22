import { ChatEngine} from 'react-chat-engine';
import './App.css';
import  ChatFeed  from './components/ChatFeed';
import  LoginForm  from './components/LoginForm';

const App = () => {



    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height='100vh'
            projectID = '0d5586d0-ce64-4fa1-abea-94019327b24b'
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()} // notifikasjons lyd når det kommer en melding

        />

    );
}


export default App;
