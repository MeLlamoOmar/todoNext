.
├── app
│   ├── (auth)
│   │   ├── login
│   │   │   └── page.tsx
│   │   └── register
│   │       └── page.tsx
│   │
│   ├── tasks
│   │   └── page.tsx
│   │
│   ├── api
│   │   ├── auth
│   │   │   ├── login
│   │   │   │   └── route.ts
│   │   │   ├── register
│   │   │   │   └── route.ts
│   │   │   ├── logout
│   │   │   │   └── route.ts
│   │   │   └── session
│   │   │       └── route.ts
│   │   │
│   │   └── tasks
│   │       └── route.ts
│   │
│   └── layout.tsx
│
├── actions
│   └── task.actions.ts
│
├── lib
│   ├── auth
│   │   ├── auth.service.ts
│   │   └── auth.config.ts
│   │
│   ├── db
│   │   ├── client.ts
│   │   └── schema.ts
│   │
│   ├── repositories
│   │   └── task.repository.ts
│   │
│   └── services
│       └── task.service.ts
│
├── tests
│   ├── auth
│   │   └── auth.service.test.ts
│   │
│   ├── repositories
│   │   └── task.repository.test.ts
│   │
│   └── services
│       └── task.service.test.ts
│
├── .env.example
├── .gitignore
├── next.config.js
├── package.json
└── README.md