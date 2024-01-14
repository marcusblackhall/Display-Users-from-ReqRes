export interface User{

   id: number,
   first_name: string,
   last_name: string,
   avatar : string,
   email: string  

}
export interface  UserData {

  data: User[],
  total_pages: number
}

export  interface UserResp {

  data: User
}

export const NO_PER_PAGE:number = 4 as const;
