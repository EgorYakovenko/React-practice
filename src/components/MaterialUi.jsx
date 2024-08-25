import { Button } from '@mui/material';

import Alert from '@mui/material/Alert';

function MaterialUi() {
  return (
    <div>
      <h1>Material Ui</h1>
      <Button variant="contained">Button</Button>
      <Alert variant="outlined" severity="success">
        This is an outlined success Alert.
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an outlined info Alert.
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an outlined warning Alert.
      </Alert>
      <Alert variant="outlined" severity="error">
        This is an outlined error Alert.
      </Alert>
    </div>
  );
}
export default MaterialUi;
