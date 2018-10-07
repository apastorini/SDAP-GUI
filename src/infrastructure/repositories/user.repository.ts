import { Injectable } from "@angular/core";
import { googleUser } from "../../models/googleUser";

const TABLE_USER = "users"

@Injectable()
export class UserRepository {
    add(profile:gapi.auth2.BasicProfile){
        let users = this.getAll();

        var foundIndex=-1;
        for (let i=0;i<users.length;i++){
            if (users[i].Id === profile.getId()){
                foundIndex = i;
                break;
            }
        }
        if (foundIndex>=0)
            users.splice(foundIndex,1);

        users.push(googleUser.fromBasicProfile(profile));
        this.save(users);
    }

    getAll():googleUser[]{
        var data = localStorage.getItem(TABLE_USER);
        if (data) {
            return <googleUser[]>(JSON.parse(data));
        }
        else
            return [];
    }

    save(users :googleUser[]){
        localStorage.setItem(TABLE_USER,JSON.stringify(users));
    }

}
