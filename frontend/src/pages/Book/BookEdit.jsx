import React, { useState } from "react";
import { Grid, Box } from "@mui/material";

export default function BookEdit() {
  const [uploaded, setUploaded] = useState({}); // {11: fileURL, 12: fileURL}

  // 업로드 처리
  const handleUpload = (index, file) => {
    if (!file) return;
    const fileURL = URL.createObjectURL(file); // 브라우저 미리보기 URL
    setUploaded((prev ) => ({...prev, [index]: fileURL }));
  };

  return (
    <Grid container spacing={2}>
      {Array.from({ length: 12 }).map((_, i) => {
        if (i <= 9) {
          return (
             <Grid key={i} size={3}>
              <img
                src={`/images/book/page${i}.png`}
                alt={`page${i}`}
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Grid>
          );
        }

        // 11, 12번 페이지 → 업로드 박스
        return (
          <Grid item xs={3} key={i}>
            <Box
              sx={{
                border: "2px dashed gray",
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {uploaded[i] ? (
                <img
                  src={uploaded[i]}
                  alt={`uploaded-${i}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    id={`upload-${i}`}
                    style={{ display: "none" }}
                    onChange={(e) =>
                      handleUpload(i, e.target.files[0])
                    }
                  />
                  <label
                    htmlFor={`upload-${i}`}
                    style={{ cursor: "pointer" }}
                  >
                    📷 이미지 업로드
                  </label>
                </>
              )}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}