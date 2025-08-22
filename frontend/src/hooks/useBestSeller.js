import { useQuery } from "@tanstack/react-query";
import aladinapi from '../utils/aladinapi';

const fetchBookList = () => {
    return aladinapi.get("/ItemList.aspx", {
        params: {
            QueryType: "Bestseller",
            MaxResults: 20,
            start: 1,
            SearchTarget: "Book",
            Cover: "MidBig",
        },
    });
};

export default function useBestSellerBooks() {
    return useQuery({
        queryKey: ["bookBest"],
        queryFn: fetchBookList,
        select: (result) => 
        (Array.isArray(result?.data?.item) ? result.data.item : []),
    });
}