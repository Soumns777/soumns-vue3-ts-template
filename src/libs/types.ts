// * 请求响应参数(不包含data)
export interface Result {
  code: string;
  msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
  data?: T;
}

export interface Login {
  name: string;
  age: number;
}

export interface LoginRes {
  access_token: string;
}
