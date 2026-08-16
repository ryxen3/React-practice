import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Profile(props) {

    // get all data
    const formData = props.formData;
    const handleChange = props.handleChange;
    const goPrevious = props.goPrevious;
    const goNext = props.goNext;

    return (
        <div>
            <Typography variant="h5" className="step-title">
                Sign up
            </Typography>
            <div className="profile-row">
                <TextField
                    label="First Name"
                    name="firstName"
                    fullWidth
                    margin="normal"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <TextField
                    label="Last Name"
                    name="lastName"
                    fullWidth
                    margin="normal"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </div>
            <TextField
                label="Country of Residence"
                name="country"
                fullWidth
                margin="normal"
                value={formData.country}
                onChange={handleChange}
            />
            <TextField
                label="Level of Education"
                name="education"
                fullWidth
                margin="normal"
                value={formData.education}
                onChange={handleChange}
            />
            <div className="profile-button-row">
                <Button fullWidth onClick={goPrevious}>
                    PREVIOUS
                </Button>
                <Button fullWidth onClick={goNext}>
                    NEXT
                </Button>
            </div>
        </div>
    );
}