import { SocialLoginModule,AuthServiceConfig,GoogleLoginProvider } from "angular5-social-login";

let GoogleClientid = "201920202566-7iidov2ajl5kbgk0n7kggrp158o5s1ts.apps.googleusercontent.com"


export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([{
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("<GoogleClientIdJHere>")
    }]);

    return config;
}
