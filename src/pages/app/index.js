import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AppLayout from '@layouts/AppLayout';

export default () => (
  <AppLayout title="Dashboard">
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" component="h2">Waiting for your content...</Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  </AppLayout>
);
