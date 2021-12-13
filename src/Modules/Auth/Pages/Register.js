import React from "react";
import { TextFieldsOutlined } from "@mui/icons-material";
import { Container, Input, TextField, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@mui/styles";
const schema = yup.object().shape({
  name: yup.string().required("Name cannot be empty"),
  email: yup.string().email("Email is not valid"),
  password: yup
    .string()
    .required("Password cannot be empty")
    .min(4, "Password must be larger than 4 characters!"),
  phone: yup.string().required("Phone cannot be empty"),
  birthday: yup.string().required("Birthday must be YYYY/MM/DD"),
  gender: yup.string().required("Gender cannot be empty"),
  address: yup.string().required("Address cannot be empty"),
});

const useStyles = makeStyles({
  root: {
    margin: 0
  },
});
export default function Register() {
  const classes = useStyles();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors},
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "", //YYYY/MM/DD
      gender: null,
      address: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h3">
        Register
      </Typography>
      <Box
        sx={{

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "400px",
        }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* <input
            placeholder="Name"
            type="text"
            {...register("name", { required: true })}
          />
         */}

        <Controller
          name="name"
          control={control}
          // value={}
          render={({ fields }) => (
            <TextField fullWidth {...fields} label="Name" margin="none" />
          )}
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}

        <button>Submit</button>
      </Box>
    </Container>

    //   <form onSubmit={handleSubmit(onSubmit)}>

    //
    //     <Controller
    //       name="email"
    //       control={control}
    //       render={({ fields }) => (
    //         <Input fullWidth {...fields} placeholder="Email" />
    //         )}
    //     />
    //     {errors.email && <p className="text-danger">{errors.email.message}</p>}

    //     <Controller
    //       name="password"
    //       control={control}
    //       render={({ fields }) => (
    //         <Input
    //         fullWidth
    //         {...fields}
    //         placeholder="Password"
    //         type="password"
    //         />
    //         )}
    //         />
    //     {errors.password && <p className="text-danger">{ errors.password.message}</p>}

    //     <Controller
    //       name="phone"
    //       control={control}
    //       render={({ fields }) => (
    //         <Input fullWidth {...fields} placeholder="Phone" />
    //         )}
    //         />
    //     {errors.phone && <p className="text-danger">{errors.phone.message}</p>}

    //     <Controller
    //       name="birthday"
    //       control={control}
    //       render={({ fields }) => (
    //         <Input fullWidth {...fields} placeholder="Date Of Birth" />
    //         )}
    //         />
    //     {errors.birthday && <p className="text-danger">{ errors.birthday.message}</p>}

    //     <Controller
    //       name="gender"
    //       control={control}
    //       render={({ fields }) => (
    //         <Input fullWidth {...fields} placeholder="Gender*" />
    //         )}
    //         />
    //     {errors.gender && <p className="text-danger">{errors.gender.message}</p>}

    //     <Controller
    //       name="address"
    //       control={control}
    //       render={({ fields }) => (
    //         <Input fullWidth {...fields} placeholder="Address" />
    //         )}
    //         />
    //     {errors.address && <p className="text-danger">{errors.address.message}</p>}

    //     <Button variant="contained" color="success" size="large" onClick= {onSubmit}>
    //       Submit
    //     </Button>
    // </form>
  );
}
