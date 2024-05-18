import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

interface Device {
  deviceId: string;
  logged_in: string;
  logged_out: string | null;
  lastSeenAt: string;
}

interface User {
  userId: string;
  devices: Device[];
}

// Sample Data
const users: User[] = [
  {
    userId: "user1",
    devices: [
      {
        deviceId: "device1",
        logged_in: "2023-01-01T00:00:00Z",
        logged_out: "2023-06-01T00:00:00Z",
        lastSeenAt: "2023-05-30T12:00:00Z"
      },
      {
        deviceId: "device2",
        logged_in: "2023-02-01T00:00:00Z",
        logged_out: null,
        lastSeenAt: "2023-05-31T08:00:00Z"
      }
    ]
  }
];

// Calculate session duration
const sessionDuration = (loggedOut: string | null, loggedIn: string): number => {
  return new Date(loggedOut || new Date().toISOString()).getTime() - new Date(loggedIn).getTime();
};

// Get last active device
const getLastActiveDevice = (devices: Device[]): Device => {
  return devices.reduce((latest, device) => {
    return new Date(device.lastSeenAt).getTime() > new Date(latest.lastSeenAt).getTime() ? device : latest;
  });
};

// API to get user session details
app.get('/user/:userId/sessions', (req: Request, res: Response) => {
  const user = users.find(u => u.userId === req.params.userId);
  if (user) {
    const sessions = user.devices.map(device => ({
      deviceId: device.deviceId,
      sessionDuration: sessionDuration(device.logged_out, device.logged_in),
      lastSeenAt: device.lastSeenAt
    }));
    const lastActiveDevice = getLastActiveDevice(user.devices);
    res.json({ sessions, lastActiveDevice });
  } else {
    res.status(404).send('User not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
