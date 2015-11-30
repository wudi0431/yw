require.config({
        baseUrl: 'script/',
        pahts:{
            'a':'a'
        }
    }
)

require(['a'], function (a) {


    alert(a());
})