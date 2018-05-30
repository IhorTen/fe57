export default function(){
    this.search = function() {
        $('#getUser').click(function(){
            let username = $('#searchUser').val();

            $.get({
                url: `https://api.github.com/users/${username}`,
                success: function(user){
                    $('.github__users').html(`
                        <img src="${user.avatar_url}" width="100">
                        <h2>${user.login}</h2>
                    `)
                },
                error: function(err){
                    alert(err.responseJSON.message);
                    $('.github__users').html(`
                        <h2>${err.responseJSON.message}</h2>
                    `)
                }
            })
        })
    }
}