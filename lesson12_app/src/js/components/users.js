import {github} from '../services/github';

// class User {

//     init(){
//         // console.log('User');
//         this.getUsers();
//         this.openProfile();
//         this.refreshUsers();
//     }

//     refreshUsers(){
//         $('.app__users-refresh').click(()=>{
//             this.getUsers();
//         })
//     }

//     getUsers(){
        // $('#users').html(`
        //     <h2 class="users__loading">LOADING ...</h2>
        // `)
//         github.getUsers()
//             .done(function(users){
//                 $('#users .users__loading').remove();
//                 // console.log(users);
                // for (const user of users) {
                //     $('#users').append(`
                //         <tr class="users__item">
                //             <td>
                //                 <img src="${user.avatar_url}" alt="" class="users__item-img" width="100">
                //             </td>
                //             <td>${user.login}</td>
                //             <td>
                //                 <button class="users__item-more" data-login="${user.login}">More info</button>
                //             </td>
                //         </tr>
                //     `)
                // }
//             })
//             .fail(function(err){
//                 console.error(err.status);
//             })
//     }

//     openProfile(){
//         $('#users').on('click', '.users__item-more', function(){
//             let data = $(this).attr('data-login');
//             $(window).trigger('openingProfile', data);
//         })
//     }

// }

// export const user = new User();






class User {

    init(){
        this.getUsers();
        this.openProfile();
    }

    getUsers(){
        $('#users').html(`
            <h2 class="users__loading">LOADING ...</h2>
        `)
        github.getUsers()
            .done(function(users){
                // console.log(users);
                $('#users').find('.users__loading').remove();
                for (const user of users) {
                    $('#users').append(`
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
                }
            })
            .fail(function(error){
                console.error(error.status);
            })
    }

    openProfile(){
        $('#users').on('click', '.users__item-more', function(){
            let login = $(this).attr('data-login');
            let data = {
                login: login
            }
            $(window).trigger('openingProfile', data);
        })
    }

}

export const user = new User();





