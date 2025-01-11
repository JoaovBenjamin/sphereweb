import { UserType } from "./User";

export type PostType = {
    id: number;
    text: string;
    user: UserType;
    createdAt: string;
}