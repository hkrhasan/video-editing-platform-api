# School Management API

Node.js API for video editing using Express, Prisma, Postgresql, Docker, and Redis.

## Features
- Upload Video
- Trim Video
- Add Subtitle
- Render with all applied filters(like Subtitle)
- Download Video

## Prerequisites
- Docker 20.10+
- AWS S3 credentials

## Structure
video-editing-platform/ 
├── api
├── worker 
└── README.md

## Setup
1. Clone repository:
```bash
git clone https://github.com/hkrhasan/video-editing-platform-api.git
cd school-mgmt
```

2. Create .env file for api
```bash
cd api && cp .env.example .env
```

2. Create .env file for worker
```bash
cd worker && cp .env.example .env
```

3. Start project
```bash
docker-compose up
```
