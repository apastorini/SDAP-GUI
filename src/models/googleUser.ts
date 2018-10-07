export class googleUser {

    Id:string;
    Email:string;

    static fromBasicProfile(profile: gapi.auth2.BasicProfile): googleUser {
        let user:googleUser = new googleUser();
        user.Id = profile.getId();
        user.Email = profile.getEmail();
        return user;
    }
}
