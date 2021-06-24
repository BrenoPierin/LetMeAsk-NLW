import { useHistory } from 'react-router';
import {FormEvent, useState} from 'react'

import { auth, database, firebase } from '../Services/firebse'

import illustrationImg from '../Assets/images/illustration.svg';
import logoImg from '../Assets/images/logo.svg';
import googleIconImg from '../Assets/images/google-icon.svg';

import { Button } from '../components/Button';

import "../styles/auth.scss";
import { useAuth } from '../hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { signinWhitGoogle, user} = useAuth()
    const [roomCode, setRoomCode] = useState('');
    
    async function handleCrateRoom() {
        if(!user) {
            await signinWhitGoogle()
        }


        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() == '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists. Type another code and try again!')
            return;
        }

        history.push(`/rooms/${roomCode}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <div>
                        <img src={logoImg} alt="letmeask" />
                        <button onClick={handleCrateRoom} className="create-room">
                            <img src={googleIconImg} alt="logo google" />
                            Crie sua sala com o Google
                        </button>
                    </div>
                    <div className="separator">Ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}