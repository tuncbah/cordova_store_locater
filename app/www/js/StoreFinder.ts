/**
 * Created by Tunç on 7/10/13.
 */

interface Store {
    name: string;

    latitude :number;
    longitude:number;
    altitude :number;

    d_latitude : number;
    d_longitude: number;

    qr_code:string;
    code   :string;
}

interface Location
{
    latitude :number;
    longitude:number;
    accuracy:number;
    altitude :number;
    altitude_accuracy :number;
}


class StoreFinder
{
    private _stores : Store[];

    public loadStores()
    {
        // replace it with async loading function
        this._stores = [
            {
                "name":"Ev",
                "latitude":"39.8862",
                "longitude":"32.6777",
                "altitude":"-1",
                "d_latitude":"0.01",
                "d_longitude":"0.01",
                "qr_code":"koru_ev_qr",
                "code":"koru_ev"
            }
        ];
    }

    public findStoreFromQrCode(qr_code : string) : string
    {
       for (var i = 0; i < this._stores.length; ++i) {
           if (this._stores[i].qr_code === qr_code) {
                return this._stores[i].name;
           }
       }
       return "";
    }

    public findStoreFromCode(code : string) : string
    {
        for (var i = 0; i < this._stores.length; ++i) {
            if (this._stores[i].code === code) {
                return this._stores[i].name;
            }
        }
        return "";
    }
    public findStoreFromLocation(location : Location) : string
    {
        for (var i = 0; i < this._stores.length; ++i) {

        }
        return "";
    }
};
