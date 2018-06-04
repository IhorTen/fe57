import {github} from '../services/github';



// class Profile{

//     init(){
//         this.openProfile();
//     }

//     openProfile(){
//         $(window).on('openingProfile', function(e, data){
            // $('#profile').html(`
            //     <h2>LOADING ...</h2>
            // `)
//             github.getUser(data)
                // .done(function(user){
                //     console.log(user);
                //     $('#profile').html(`
                //         <img src="${user.avatar_url}" width="150"> <br><br>
                //         <span>${user.login}</span>
                //         <h2>${user.name || ''}</h2>
                //         <h3>${user.location || ''}</h3>
                //         <h4>FOLLOWERS: ${user.followers || 0}</h4>
                //         <h4>FOLLOWING: ${user.following || 0}</h4>
                //     `)
                // })
                // .fail(function(err){
                //     console.log(err);
                // })
            
            // $('#followers').html(`
            //     <h2 class="followers__loading">LOADING...</h2>
            // `)
            // github.getUserFollowers(data)
            //     .done(function(followers){
            //         // console.log(followers);
            //         $('#followers .followers__loading').remove();
            //         for (const follower of followers) {
            //             $('#followers').append(`
            //                 <tr class="followers__item">
            //                     <td>
            //                         <img src="${follower.avatar_url}" alt="" class="users__item-img" width="100">
            //                     </td>
            //                     <td>${follower.login}</td>
            //                 </tr>
            //             `)
            //         }
            //     })
            //     .fail(function(err){
            //         console.log(err);
            //     })
            
//         })
//     }

// }


// export const profile = new Profile();


class Profile{

    init(){
        this.openProfile();
    }

    openProfile(){
        $(window).on('openingProfile', function(e, data){
            $('#profile').html(`
                <h2>LOADING ...</h2>
            `)
            github.getUser(data.login)
                .done(function(user){
                    console.log(user);
                    $('#profile').html(`
                        <img src="${user.avatar_url}" width="150"> <br><br>
                        <span>${user.login}</span>
                        <h2>${user.name || ''}</h2>
                        <h3>${user.location || ''}</h3>
                        <h4>FOLLOWERS: ${user.followers || 0}</h4>
                        <h4>FOLLOWING: ${user.following || 0}</h4>
                    `)
                })
                .fail(function(err){
                    console.log(err);
                })

            $('#followers').html(`
                <h2 class="followers__loading">LOADING...</h2>
            `)
            github.getUserFollowers(data.login)
                .done(function(followers){
                    // console.log(followers);
                    $('#followers .followers__loading').remove();
                    for (const follower of followers) {
                        $('#followers').append(`
                            <tr class="followers__item">
                                <td>
                                    <img src="${follower.avatar_url}" alt="" class="users__item-img" width="100">
                                </td>
                                <td>${follower.login}</td>
                            </tr>
                        `)
                    }
                })
                .fail(function(err){
                    console.log(err);
                })
        })
    }

}


export const profile = new Profile();