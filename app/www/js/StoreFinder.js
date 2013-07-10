var StoreFinder = (function () {
    function StoreFinder() {
    }
    StoreFinder.prototype.loadStores = function () {
        this._stores = [
            {
                "name": "Ev",
                "latitude": "39.8862",
                "longitude": "32.6777",
                "altitude": "-1",
                "d_latitude": "0.01",
                "d_longitude": "0.01",
                "qr_code": "koru_ev_qr",
                "code": "koru_ev"
            }
        ];
    };

    StoreFinder.prototype.findStoreFromQrCode = function (qr_code) {
        for (var i = 0; i < this._stores.length; ++i) {
            if (this._stores[i].qr_code === qr_code) {
                return this._stores[i].name;
            }
        }
        return "";
    };

    StoreFinder.prototype.findStoreFromCode = function (code) {
        for (var i = 0; i < this._stores.length; ++i) {
            if (this._stores[i].code === code) {
                return this._stores[i].name;
            }
        }
        return "";
    };
    StoreFinder.prototype.findStoreFromLocation = function (location) {
        for (var i = 0; i < this._stores.length; ++i) {
        }
        return "";
    };
    return StoreFinder;
})();
;
//@ sourceMappingURL=StoreFinder.js.map
