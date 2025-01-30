import {useState} from 'react';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css'
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App(){
  const [chatMessages, setChatMessages] = useState([]);
  return(
    <div className="app-container">
      <NavBar />
       <div className="chat-welcome-message">
        Welcome to <span>AriaAI,</span> How can I assist you today?
      </div>
       <ChatMessages 
        chatMessages={chatMessages}
       />
       <ChatInput 
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}            
        />
        <Footer />
    </div>
  );
}


export default App
