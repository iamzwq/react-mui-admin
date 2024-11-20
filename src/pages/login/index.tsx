import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Divider, Grid2, Stack, TextField, Typography } from "@mui/material";
import ReactSvg from "@/assets/react.svg?react";
import AppHelmet from "@/components/helmet";
import LoginOthers from "./component/login-others";

export default function Login() {
  const navigate = useNavigate();

  const {
    control,
    formState: { isSubmitting, isValid, errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    navigate("/home", {
      state: "login",
      replace: true,
    });
  });
  return (
    <>
      <AppHelmet />
      <Grid2 container className="h-screen">
        <Grid2 size={{ xs: 0, md: 5 }} className="flex items-center justify-center bg-black">
          <ReactSvg className="size-48 animate-spin-slow" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7 }} className="flex items-center justify-center">
          <Card
            elevation={0}
            sx={{ width: 400, p: 8, border: "1px solid var(--mt-palette-divider)" }}
          >
            <Typography variant="h4" fontWeight={600} mb={4}>
              Welcome
            </Typography>
            <Box component="form" onSubmit={onSubmit} autoComplete="off">
              <Stack spacing={6}>
                <Box sx={{ position: "fixed", top: " -2000px", left: "-2000px", opacity: 0 }}>
                  <input type="text" />
                  <input type="password" />
                </Box>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "please enter username" }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Username"
                      error={!!errors.username}
                      helperText={(errors.username?.message || "") as string}
                      sx={{
                        "& .MuiFormHelperText-root.Mui-error": { mx: 0 },
                      }}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "please enter password" }}
                  render={({ field }) => (
                    <TextField
                      type="password"
                      {...field}
                      label="Password"
                      error={!!errors.password}
                      helperText={(errors.password?.message || "") as string}
                      sx={{
                        "& .MuiFormHelperText-root.Mui-error": { mx: 0 },
                      }}
                    />
                  )}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  fullWidth
                  disabled={!isValid || isSubmitting}
                >
                  Sign In
                </Button>
              </Stack>
            </Box>
            <Divider sx={{ my: 4 }}>Or</Divider>
            <LoginOthers />
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
}
