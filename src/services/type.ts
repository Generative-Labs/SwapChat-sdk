export interface GetLoginRandomSecretParams {
    wallet_address: string
}


export interface GetLoginRandomSecretResponse {
    data: string;
    code: number;
    msg: string;
}
export interface LoginParams {
    login_random_secret: string,
    signature: string,
    wallet_address: string,
    user_avatar?: string
}
export interface LoginResponse {
    data: {
        access_token: string
    };
    code: number;
    msg: string;
}
export interface GetRoomsParams {
    user_id?: string,
    user_ids?: string[],
    is_opensea_coll?: boolean,
    opensea_coll_slug?: string
    item_contract_address?: string,
    is_twitter_space?: boolean
    space_id?: string
    space_title?: string,
    target_user_avatar?: string

}

export interface  GetRoomsResponse {
    data: string;
    code: number;
    msg: string;
}
export enum PLATFORM_ENUM {
    TWITTER = "twitter",
    DISCORD = "discord",
    FACEBOOK = "facebook",
    INSTAGRAM = "instagram",
    OPENSEA = "opensea",
    SWAPCHAT="swapchat"
  }
  export enum INTERFACE_TYPE {
    SINGLE = "single",
    GROUP = "group",
    THREAD = "thread",
    CUSTOMER = "customer",
  }