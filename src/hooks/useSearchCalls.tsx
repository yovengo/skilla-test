import { useEffect, useState } from "react";
import axios from "axios";

interface IRequestParams {
        dateStart: string;
        dateEnd: string;
        inOut?: 0 | 1;
        sortBy?: "date" | "duration";
        order?: "ASC" | "DESC"
}

export const useSearchCalls = ({ dateStart, dateEnd, inOut, sortBy, order }: IRequestParams) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(false);
    const [calls, setCalls] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios({
            method: "POST",
            url: "https://api.skilla.ru/mango/getList",
            params: {
                "date_start": dateStart,
                "date_end": dateEnd,
                "in_out": inOut,
                "sort_by": sortBy,
                "order": order
            },
            headers: {
                Authorization: "Bearer testtoken",
            }
        }).then((res) => {
            setCalls(res.data);
            setLoading(false);
        }).catch((e) => {
            setError(false);
            console.log(e);
        })
    }, [dateStart, dateEnd, inOut, sortBy, order]);
  return { loading, error, calls };
}