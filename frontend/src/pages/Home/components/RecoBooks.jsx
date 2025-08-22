import React from "react";
import { Box, Container, Typography } from "@mui/material";
import BookSlider from "../../../components/BookSlider/BookSlider";
import { responsive } from "../../../constants/responsive";

const GREEN = "#589857";

export default function RecommendSection({ title = "추천 책장", books = [] }) {
    if (!books?.length) return null;
    const{data,isLoading,isError,error}=useBestSellerBooks()

    if(isError){
        return <Alert severity="error">{error.message}</Alert>
    }
    if (!data || !data.length) {
        return <div>No data available</div>;
    }
    return (
    <div>
        <div>
            <BookSlider title="추천도서" books={data} responsive={responsive} />
        </div>
    
    <Box
      sx={{
        bgcolor: GREEN,     
        color: "#fff", 
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: { xs: 22, sm: 26, md: 30 },
            mb: 3,
          }}
          data-aos="fade-up"
        >
          {title}
        </Typography>

        <div data-aos="fade-up" data-aos-delay="120">
          <BookSlider title={null} books={books} responsive={responsive} />
        </div>
      </Container>
    </Box>
    </div>
  );
}
