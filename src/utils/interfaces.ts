export interface IMessage{
    messageId: string,
    messageFrom: string | undefined,
    messageTo: string,
    content: string,
    createdAt: number
}