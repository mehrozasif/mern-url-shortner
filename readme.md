# Mern URL Shortener App

This is an URL shortener service like bit.ly or cutt.ly. The API service can take a long URL and convert it to a shorter URL. MongoDB is used as the database. The long URL, short URL, and other details are stored in the database. When a long URL that is already stored in the database is passed again, it returns the older shortened URL.


## Run Locally

Clone the project

```bash
  git clone https://github.com/mehrozasif/mern-url-shortner.git
```

Go to the project directory

```bash
  cd mern-url-shortner
```

Install dependencies

```bash
  npm install
```

Go to the client's folder

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

### Shorten URL

```http
  POST /api/short
```

| Field | Type   | Description  |
| :---- | :----- | :----------- |
| Body  | `json` | Original Url |

**Example:**

```http
POST http://localhost:3333/api/short
Content-Type: application/json

{
    "origUrl": "https://www.w3schools.com/html/html_formatting.asp"
}

```

### Get item

```http
  GET /:id
```

| Parameter | Type     | Description     |
| :-------- | :------- | :-------------- |
| `id`      | `string` | Unique URL Code |

**Example:**

```http
GET http://localhost:3333/LFKiehidns
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

| Variable    | Description             |
| :---------- | :---------------------- |
| `MONGO_URI` | MongoDB URI             |
| `BASE`      | Base URL for Shortening |
