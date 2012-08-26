var whatapi = {};

(function() {
    whatapi = whatapi || {};
    console.log('loading whatapi.js...');

    whatapi.baseUrl = 'https://what.cd';
    whatapi.loginUrl = whatapi.baseUrl + '/login.php';
    whatapi.url = whatapi.baseUrl + '/ajax.php';

    whatapi.login = function() {
        console.log('logging in to ' + whatapi.loginUrl + '...');
        $.ajax({
            url: whatapi.loginUrl,
            type: 'POST',
            data: {'username': 'me', 'password': 'lol'},
            xhrFields: {
                withCredentials: true,
            },
            success: function (data, textStatus) {
                console.log('success! ' + data);
            },
            error: function(data, textStatus, error) {
                console.log('fail! ' + data.status);
            },
        });
    }

    whatapi.testLogin = function() {
        $.ajax({
            url: whatapi.url,
            type: 'GET',
            data: {'action': 'index'},
            dataType: 'json',
            xhrFields: {
                withCredentials: true,
            },
            success: function (data, textStatus) {
                console.log('success! ' + data);
            },
            error: function(data, textStatus, error) {
                console.log('fail! ' + data.status);
            },
        });
    }
})();
