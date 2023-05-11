import { createContext } from "react";
import socketio from "socket.io-client";
// import { SOCKET_URL } from "config";


const URL = import.meta.env.NODE_ENV === 'production' ? undefined : 'http://localhost:3000';
export const socket = socketio.connect(URL);
export const SocketContext = createContext();
