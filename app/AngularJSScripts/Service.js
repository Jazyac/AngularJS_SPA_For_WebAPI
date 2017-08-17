app.factory('ItemService', function () {
    var data = {};
	var API_URL="http://jazyac-001-site1.gtempurl.com/api/todo/";
    return {
        getData: function () {
            return data;
        },

        setData: function (dataArg) {
            data = dataArg;
        },
		 getApiURL: function () {
            return API_URL;
        }
    };
});
