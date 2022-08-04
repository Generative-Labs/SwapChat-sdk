export interface OptionsType {
width?:number,
height?:number
}
export interface ParamsType {
platform?:PlatformType,
type?:methodType,
room_payload:
}
export interface RoomPayloadType{
    user_id:string,
    user_avatar?:string,
    user_name: string


}
export enum PlatformType {
    TWITTER = "twitter",
    DISCORD = "discord",
    FACEBOOK = "facebook",
    INSTAGRAM = "instagram",
    OPENSEA = "opensea",
    SWAPCHAT="swapchat"
}
export enum methodType {
    SINGLE = "single",
    GROUP = "group",
    THREAD = "thread",
    CUSTOMER = "customer",
}
