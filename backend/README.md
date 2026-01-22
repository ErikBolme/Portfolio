# Backend - FastAPI Server

FastAPI backend for portfolio contact form and future features.

## Features

- RESTful API with FastAPI
- MongoDB integration
- CORS enabled for frontend
- Ready for contact form submissions

## Development

```bash
# Install dependencies
pip install -r requirements.txt

# Start development server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

## Environment Variables

Create a `.env` file:

```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
```

## API Endpoints

- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks

## Future Features

- Contact form submissions storage
- Email notifications
- Admin dashboard
- Analytics tracking

## Tech Stack

- **FastAPI** - Modern Python web framework
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **python-dotenv** - Environment management
