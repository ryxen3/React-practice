import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Account(props) {
    const formData = props.formData;
    const handleChange = props.handleChange;
    const goNext = props.goNext;

    return (
        <div>
            <Typography variant="h5" className="step-title">
                Sign up
            </Typography>
            <TextField
                label="Email Address"
                name="email"
                fullWidth
                margin="normal"
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                label="Username"
                name="username"
                fullWidth
                margin="normal"
                value={formData.username}
                onChange={handleChange}
            />
            <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                margin="normal"
                value={formData.password}
                onChange={handleChange}
            />
            <div className="account-next-button">
                <Button fullWidth onClick={goNext}>
                    NEXT
                </Button>
            </div>
        </div>
    );
}