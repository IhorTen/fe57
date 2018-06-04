import {github} from '../services/github';

class Search {

    init(){
        this.searchUser();
    }

    searchUser(){
        $('.app__search-btn').click(function(){
            let login = $('.app__search-inp').val();
            github.getUser(login)
                .done(function(user){
                    $('#users').html(`
                        <tr class="users__item">
                            <td>
                                <img src="${user.avatar_url}" alt="" class="users__item-img" width="100">
                            </td>
                            <td>${user.login}</td>
                            <td>
                                <button class="users__item-more" data-login="${user.login}">More info</button>
                            </td>
                        </tr>
                    `)
                })
                .fail(function(err){
                    const mess = err.responseJSON.message;
                    $('#users').html(`
                        <h2 class="users__loading">${mess}</h2>
                    `)
                })
        })
    }

}

export const search = new Search();