export interface Criteria {
    field: string;
    value: string;
    operator?: string;
    page?: number;
    limit?: number;
    orderBy?: string;
    orderType?: string;
  }