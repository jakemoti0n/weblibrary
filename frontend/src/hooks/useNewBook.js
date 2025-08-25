import { useQuery } from "@tanstack/react-query";
import aladinapi from '../utils/aladinapi';

const fetchBookList = () => {
    return aladinapi.get("/ItemList.aspx", {
        params: {
            QueryType: "ItemNewSpecial",
            MaxResults: 20,
            start: 1,
            SearchTarget: "Book",
            Cover: "MidBig",
        },
    });
};

export default function useNewBook() {
    return useQuery({
        queryKey: ["bookNew"],
        queryFn: fetchBookList,
        select: (result) => 
        (Array.isArray(result?.data?.item) ? result.data.item : []),
    });
}