export const routes = {
    user:{
        create:'/users/register',
        find:`/users/find/`, // exemple -> /users/find/test@test.com
    },

    auth:{
        login:'/auth/login'
    },

    localization:{
        update:'/users/registerLocale/' // exemple -> /user/registerLocales//test@test.com  (has body)
    }
}