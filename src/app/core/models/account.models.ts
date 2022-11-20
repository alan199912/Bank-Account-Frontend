export interface GetAccountsResponse {
  status: string;
  total: number;
  pagination: Pagination;
  accounts: Account[];
}

export interface GetAccountsByNumberAccountResponse {
  status: string;
  account: Account;
}

export interface Account {
  e: string;
  n: string;
  t: string;
  saldo: string;
  moneda: string;
  tipo_letras: string;
}

export interface Pagination {
  next?: AccountNextResponse;
  previous?: AccountPreviousResponse;
}

interface AccountNextResponse {
  page: number;
  limit: number;
}

interface AccountPreviousResponse {
  page: number;
  limit: number;
}
