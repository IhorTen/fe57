export default function() {

    // var users = [
    //     {
    //         username: 'Sashka',
    //         email: 'sashka_000@gmail.com'
    //     },
    //     {
    //         username: 'Bob',
    //         email: 'Bob@gmail.com'
    //     },
    //     {
    //         username: 'Ivan',
    //         email: 'Ivan_000@gmail.com'
    //     }
    // ]

    this.getUsers = function(){
        $('#users').html(`
            <tr class="users__loading">
                <td colspan="2" align="center">
                    <h3>LOADING...</h3>
                </td>
            </tr>
        `)
        $.ajax({
            type: "GET",
            url: 'https://jsonplaceholder.typicode.com/users',
            success: function(users){
                // console.log(users);
                $('#users').find('.users__loading').remove();
                for (let i = 0; i < users.length; i++) {
                    $('#users').append(`
                        <tr>
                            <td>${users[i].username}</td>
                            <td>${users[i].email}</td>
                            <td>
                                <button data-user="${i}" class="users__open">Open profile</button>
                            </td>
                        </tr>
                    `)
                }
                $('#users').find('.users__open').click(function(){
                    let user = users[$(this).attr('data-user')];
                    $('#user').html(`
                        <h2 class="user__name">${user.name}</h2>
                        <div class="user__username">${user.username}</div>
                        <div class="user__email">${user.email}</div>
                    `)
                })
            },
            error: function(err){
                console.log(err);
            }
        })
    }
    
}