import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/home')
    }

    return <Card sx={{ flex: 1 }}>
        <Typography variant="h6" color="inherit" component="div">
            Ohoo, You are on wrong page. Try to move
        </Typography>
        <Typography variant="h6" color="inherit" component="div"
            onClick={navigateHome}>
            Home
        </Typography>
    </Card>
}
export default NoPage;