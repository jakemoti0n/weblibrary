import React from 'react'
import useBestSellerBooks from '../../../../hooks/useBestSeller'
import Alert from "@mui/material/Alert";
import { responsive } from '../../../../constants/responsive';
import BookSlider from '../../../../components/BookSlider/BookSlider';

const Bestseller = () => {
    const{data,isLoading,isError,error}=useBestSellerBooks()
    console.log("데이타",data)

    if(isError){
        return <Alert severity="error">{error.message}</Alert>
    }
    if (!data || !data.length) {
        return <div>No data available</div>;
    }
    return (
    <div>
        <div>
            <BookSlider title="Bestseller top 10" books={data} responsive={responsive} />
        </div>
    </div>
    
    )
}

export default Bestseller