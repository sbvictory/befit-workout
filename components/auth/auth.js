module.exports = {

    login(username, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }

        authCheck(username, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },

    getToken() {
        return localStorage.token
    },

    logout(cb) {
        delete localStorage.token
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn() {
        return !!localStorage.token
    },

    // export this cb function to switch App.js to different states
    onChange() {
    }
}

function authCheck(username, password, cb) {

    $.ajax({
        url: "/auth",
        type: "post",
        dataType: "json",
        data: {username: username, password: password},
        success: function (user) {

            if (user.authUser.length === 0) {
                console.log('who dares to defile this ancient land!');
                cb({authenticated: false});
            } else {
                localStorage.setItem('username', username);
                localStorage.setItem('userId', user.authUser[0].user_id);
                cb({authenticated: true, token: Math.random().toString(36).substring(7)})
            }

        }.bind(this),
        error: function () {
            // failed then set to previous rate
            console.log('error')
        }
    });

}
