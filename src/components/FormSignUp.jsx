import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSignUp() {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

  return (
    <form onSubmit={(e) => { 
        e.preventDefault()
        console.log({name, lastName, email, prom, nov}) 
    }}>
      <TextField 
        id="name" 
        label="Nombre" 
        variant="outlined" 
        fullWidth
        margin="normal"
        onChange={(e) => {
            setName(e.target.value)
        }}
        value={name}
      />
      <TextField 
        id="lastname" 
        label="Apellido" 
        variant="outlined" 
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField 
        id="email" 
        label="Correo electrónico" 
        variant="outlined" 
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormGroup>
        <FormControlLabel 
            control={<Switch 
                checked={prom} 
                onChange={(e) => setProm(e.target.checked)} 
            />}
            label="Promociones"
         />
        <FormControlLabel
            control={<Switch 
                checked={nov}
                onChange={(e) => setNov(e.target.checked)} 
            />}
            label="Novedades"
        />
      </FormGroup>
      <Button variant="contained" type="submit">Registrarse</Button>
    </form>
  );
}

export default FormSignUp;
