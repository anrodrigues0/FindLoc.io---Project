export function isEmail<T>(value:T,cbInvalid:Function, cbNotInvalid:Function){
    const regex =   /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;
    if(!regex.test(value as any)){
        return  cbInvalid()
    }
    return cbNotInvalid();
}

export function isEqualPassoword<T>(pass:T,comparePass:T, cbInvalid:Function,cbValid:Function){
    if(pass !== comparePass){
        return cbInvalid()   
    }
    return cbValid();
}

export function isStrongPassword<T>(value:T,cbInvalid:Function, cbNotInvalid:Function){
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/
    if(!regex.test(value as any)){
        return  cbInvalid()
    }
    return cbNotInvalid();
}