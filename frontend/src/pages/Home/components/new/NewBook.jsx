import React from 'react'
import useNewBook from '../../../../hooks/useNewBook'
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { responsive } from '../../../../constants/responsive';
import BookSlider from '../../../../components/BookSlider/BookSlider';

const NewBook = () => {
    const{data,isLoading,isError,error}=useNewBook()
    if (isLoading) {
        return (
            <div className="spinner-container" style={{ textAlign: 'center', padding: '2rem' }}>
                <CircularProgress color="inherit" size={50} />
            </div>
        );
    }
    if(isError){
        return <Alert severity="error">{error.message}</Alert>
    }
    if (!data || !data.length) {
        return <div>No data available</div>;
    }
    return (
    <div>
        <div>
            <BookSlider title="NewBook" books={data} responsive={responsive} />
        </div>
    </div>
    
    )
}

export default NewBook