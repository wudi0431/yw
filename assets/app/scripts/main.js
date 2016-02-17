require.config({
        baseUrl: 'scripts/',
        pahts:{
            'a':'a'
        }
    }
)
require(['a'], function (a) {
    alert(a());
})