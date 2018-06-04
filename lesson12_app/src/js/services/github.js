class Github{

    getUsers(){
        return $.get('https://api.github.com/users')
    }


    getUser(login){
        return $.get(`https://api.github.com/users/${login}`)
    }

    getUserFollowers(login){
        return $.get(`https://api.github.com/users/${login}/followers`)
    }

}

export const github = new Github();