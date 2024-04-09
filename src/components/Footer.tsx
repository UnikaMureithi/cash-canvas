import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
// import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

  
function Footer() {
  return (
    <>
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
        backgroundColor: "#A3E4D7",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ mb: 4 }}>
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autocomplete: "off",
                  ariaLabel: "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
            <br/><br/>
            <Typography variant="body2" fontWeight={600}>
            Contact us
          </Typography>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            Email: cash_canvas@gmail.com
          </Link>
          <br/>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            Phone number: +372765312098
          </Link>
          </Box>
        </Box>
        



        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Product
          </Typography>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            Track savings
          </Link>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            Log Expenses
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            About
          </Typography>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            How Cash Canvas Works
          </Link>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            Our Offerings
          </Link>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            About Us
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            Terms
          </Link>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            Privacy
          </Link>
          <Link
            variant="body1"
            style={{ textDecoration: "none" }}
            color="text.secondary"
            href="#"
          >
            Contact
          </Link>
        </Box>
      </Box>
    </Container>
    </>
  );
}

export default Footer;
