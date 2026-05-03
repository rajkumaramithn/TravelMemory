# Travel Memory

`.env` file to work with the backend after creating a database in mongodb: 

```
MONGO_URI='ENTER_YOUR_URL'
PORT=3000
JWS_SECRET=<Your Secret>
```

Data format to be added: 

```json
{
  "tripName": "Trip to Goa",
  "tripType": "Leisure",
  "shortDescription": "Beautiful beaches and sunsets",
  "featured": true,
  "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
}
```


For frontend, you need to create `.env` file and put the following content (remember to change it based on your requirements):
```bash
REACT_APP_BACKEND_URL=http://localhost:3001
```
