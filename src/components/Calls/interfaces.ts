export interface ICall {
  id: string;
  partnership_id: string;
  partner_data: {
    id: string;
    name: string;
    phone: string;
  };
  date: string;
  date_notime: string;
  time: number;
  from_number: string;
  from_extension: string;
  to_number: string;
  to_extension: string;
  is_skilla: boolean;
  status: 'Не дозвонился' | 'Дозвонился';
  record: string;
  line_number: string;
  in_out: 0 | 1;
  from_site: boolean;
  source: string;
  errors?: { title: string }[];
  disconnect_reason?: string;
  result?: { type: string; title: string; tooltip?: string }[];
  stages?: {
    person_name: string;
    person_surname: string;
    person_mango_phone: string;
    duration: string;
    disconnect_reason: string;
  }[];
  abuse?: {
    date: string;
    person_name: string;
    message: string;
    support_read_status: 0 | 1;
    support_answer_status: 0 | 1;
    answers?: {
      message: string;
      from_support: 0 | 1;
      support_read_status: 0 | 1;
      person_read_status: 0 | 1;
    }[];
  };
  contact_name?: string;
  contact_company?: string;
  person_id: string;
  person_name: string;
  person_surname: string;
  person_avatar: string;
}

export interface ICallsRequest {
  total_rows: number;
  results: ICall[];
}

export interface ITableColumns<T> {
  [key: string]: {
    name: string;
    path?: 'date' | 'duration';
    component?: (item: T) => React.ReactElement;
  };
}
