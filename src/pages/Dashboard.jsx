import { Box, Grid, Paper, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const barData = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 300 },
  { name: 'Mar', uv: 500 },
];

const lineData = [
  { name: 'Jan', pv: 240 },
  { name: 'Feb', pv: 350 },
  { name: 'Mar', pv: 200 },
];

const stats = [
  { label: 'Users', value: 123 },
  { label: 'Sales', value: 456 },
  { label: 'Revenue', value: '$789' },
  { label: 'Orders', value: 321 },
];

const Dashboard = () => {
  return (
    <Box p={2}>
      <Typography variant="h4" mb={3}>Dashboard</Typography>

      {/* Stats Row */}
      <Grid
        container
        spacing={2}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', // 4 equal columns
          mb: 2,
        }}
      >
        {stats.map((stat, idx) => (
          <Grid item key={idx}>
            <Paper sx={{
              p: 2,
              textAlign: 'center',
              boxShadow: 3,
              borderRadius: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: '0.3s',
              '&:hover': { boxShadow: 6, transform: 'scale(1.02)' },
            }}>
              <Typography variant="subtitle1" color="textSecondary">{stat.label}</Typography>
              <Typography variant="h4" color="primary">{stat.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Charts Row */}
      <Grid
        container
        spacing={2}
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // 2 equal columns
        }}
      >
        <Grid item>
          <Paper sx={{
            p: 2,
            minHeight: 350,
            borderRadius: 2,
            boxShadow: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Typography variant="h6" mb={2}>Bar Chart</Typography>
            <Box flex={1}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#1976d2" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        <Grid item>
          <Paper sx={{
            p: 2,
            minHeight: 350,
            borderRadius: 2,
            boxShadow: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Typography variant="h6" mb={2}>Line Chart</Typography>
            <Box flex={1}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="pv" stroke="#f50057" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
