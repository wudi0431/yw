require.config({
        baseUrl: 'scripts/',
        paths:{
            'a':'a'
        }
    }
)
require(['a'], function (a) {
    alert(a());
})