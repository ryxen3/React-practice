import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Review(props) {
    const formData = props.formData;
    const goPrevious = props.goPrevious;
    const handleConfirm = props.handleConfirm;

    return (
        <div>
            <Typography className="review-label">Email</Typography>
            <Typography className="review-value">{formData.email}</Typography>
            <Typography className="review-label">Username</Typography>
            <Typography className="review-value">{formData.username}</Typography>
            <Typography className="review-label">First Name</Typography>
            <Typography className="review-value">{formData.firstName}</Typography>
            <Typography className="review-label">Last Name</Typography>
            <Typography className="review-value">{formData.lastName}</Typography>
            <Typography className="review-label">Country of Residence</Typography>
            <Typography className="review-value">{formData.country}</Typography>
            <Typography className="review-label">Level of Education</Typography>
            <Typography className="review-value">{formData.education}</Typography>
            <div className="review-button-row">
                <Button fullWidth onClick={goPrevious}>
                    PREVIOUS
                </Button>
                <Button fullWidth onClick={handleConfirm}>
                    CONFIRM & CONTINUE
                </Button>
            </div>
        </div>
    );
}