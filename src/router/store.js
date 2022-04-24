import { reactive } from 'vue'

export const store  = reactive({
    isLogIn: false,
    roles: false,
    logOut() {
        localStorage.removeItem("-token-");
        localStorage.removeItem("-roles-");
        this.isLogIn = false;
    },
    hasRole(roles){
        let roles_ = localStorage.getItem("-roles-");
        if (roles_){
            roles_ = roles_.split(",")
            return roles.some( ai => roles_.includes(ai) );
        }else {
            return false;
        }
    },
    logIn() {
        this.isLogIn = true;
    }
})
