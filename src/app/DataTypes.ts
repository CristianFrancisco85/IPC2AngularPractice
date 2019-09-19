export interface User {
    "IDUser" : number;
    "FirstName": string;
    "SecondName": string;
    "NickName": string;
    "Passwd": string;
    "Rol": string;
}
export interface Product {
    "IDProduct" : number ;
    "ProductName" : string;
    "Stock" : number ;
    "Price" : number;
    "Description": string;
}

export interface Provider {
    "IDProvider" : number ;
    "ProviderName" : string;
    "Address" : string ;
    "PhoneNumber" : string ;
}

export interface PurchasedProduct {
    "IDPurchasedProduct" : number ;
    "IDProduct" : number ;
    "IDShopCar" : number ;
}

export interface ShopCar {
    "IDShopCar" : number ;
    "IDBill" : number ;  
}

export interface Bill {
    "IDBill" : number ;
    "IDUser" : number ;  
}

export interface Provider_Product {
    "IDProvider" : number ;
    "IDProduct" : number ;  
}

export interface OkPacket {
    "fieldCount": number;
    "affectedRows": number;
    "insertId": number;
    "serverStatus": number;
    "warningCount": number;
    "message": string;
    "protocol41": boolean;
    "changedRows": number;
}