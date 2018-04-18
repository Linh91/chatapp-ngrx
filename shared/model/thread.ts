export interface Thread {
    id: number;
    messageId: number[];
    participants: {[key: number]: number};
}
