import { User } from "./user"
import {Editor} from "./editor"

export interface Admin extends User, Editor {
    deleteUser() : string
}

