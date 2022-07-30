import axiosApiInstance from './axios'
import {
  GetLoginRandomSecretParams,
  GetLoginRandomSecretResponse,
  LoginParams,
  LoginResponse,
  GetRoomsParams,
  GetRoomsResponse
} from './type'
export async function register(params: any): Promise<any> {
    return await axiosApiInstance.post("/register", params);
  }
export async function getLoginRandomSecret (params: GetLoginRandomSecretParams) :Promise<GetLoginRandomSecretResponse> {
    return await axiosApiInstance.post('/login_random_secret', params)
}
export async function login (params: LoginParams) :Promise<LoginResponse> {
  return await axiosApiInstance.post('/login', params)
}
export async function getRooms(
  params: GetRoomsParams
): Promise<GetRoomsResponse> {
  return await axiosApiInstance.post("/rooms", params);
}