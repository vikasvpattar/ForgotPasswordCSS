import { inlineStyles } from './style.js';
import Typography from '../Elements/Typography';
import Box from '../Elements/Box';
import Label from '../Elements/Label';
import Input from '../Elements/Input';
import Button from '../Elements/Button';
export default function ResetPassword() {
  return (
    <Box style={{ ...inlineStyles.Box_D80C,"boxSizing": "border-box" }}>
      <Box style={{ ...inlineStyles.Box_2EBB }}>
        <Typography style={{ ...inlineStyles.Typography_2FCE,margin:"0px" }}>
          Change password
        </Typography>
        <Typography style={{ ...inlineStyles.Typography_48E8,margin:"0px" }}>
          Choose a strong password and don't reuse it for other accounts.
          Changing your password will sign you out of all your devices,
          including your phone. You will need to enter your new password on all
          your devices
        </Typography>
      </Box>
      <Box style={{ ...inlineStyles.Box_5491, }}>
        <Box style={{ ...inlineStyles.Box_CF5D }}>
          <Label style={{ ...inlineStyles.Label_EC0E }} for="input">
            Old password
          </Label>
          <Input
            style={{ ...inlineStyles.Input_25DB,boxSizing: "border-box"}}
            placeholder="Old password"
            id="input"></Input>
        </Box>
        <Box style={{ ...inlineStyles.Box_7363 }}>
          <Label style={{ ...inlineStyles.Label_0FCC }} for="input2">
            New password
          </Label>
          <Input
            style={{ ...inlineStyles.Input_CE4C,boxSizing: "border-box" }}
            placeholder="At least 8 characters"
            id="input2"></Input>
        </Box>
        <Box style={{ ...inlineStyles.Box_E9D7 }}>
          <Label style={{ ...inlineStyles.Label_D563 }} for="input3">
            Confirm new password
          </Label>
          <Input
            style={{ ...inlineStyles.Input_DC90,boxSizing: "border-box" }}
            placeholder="Confirm password"
            id="input3"></Input>
        </Box>
        <Button style={{ ...inlineStyles.Button_3BBD }}>
          <Typography style={{ ...inlineStyles.Typography_2FCD,margin:"0px" }}>
            Change password
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
