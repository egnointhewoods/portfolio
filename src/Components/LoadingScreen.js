import "../Component-Styles/loadingScreen.css";
import LinearProgress from "@mui/material/LinearProgress";

export default function LoadingScreen() {
  return (
    <div className="loadingWrapper">
      <div className="loading">
        <LinearProgress />
      </div>
    </div>
  );
}
