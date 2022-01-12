export type LoginTypes = {
    email: string;
    password: string;
  };
  
  export type CurrentUserTypes = {
    uid: string;
    email: string;
  };
  
  export type AuthContextTypes = {
    currentUser?: CurrentUserTypes | null;
  };