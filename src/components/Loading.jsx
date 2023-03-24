import { useState, CSSProperties } from "react";
import {RiseLoader} from "react-spinners";
import { Box,Grid} from "@mui/material";
const override ={
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loading() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#be0984");

  return (
    <div className="sweet-loading">
      {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" /> */}

      {/* <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
      {/* <DotLoader color="#b11a0d"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader" 
          
        /> */}
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}  mt={25}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
        <RiseLoader
  color={color}
  margin={4}
  loading={loading}
        cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      
  />
        </Grid>
        </Grid>
        </Box>

    </div>
  );
}

export default Loading;