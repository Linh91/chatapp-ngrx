import { Message } from './../model/message';
import { Thread } from './../model/thread';
import { Participant } from './../model/participant';

export interface AllUserData {
    participant: Participant[];
    threads: Thread[];
    messages: Message[];
}
