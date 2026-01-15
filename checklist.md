# ✅ Checklist Técnico — Mini App (Markdown)

## 🧱 FASE 0 — Base del proyecto
* Crear proyecto Next.js (App Router) [x]
* Configurar TypeScript [x]
* Inicializar repo Git [x]
* Crear ramas main y dev [x]
* Hacer commit inicial a github [x]
* Conectar repo a Vercel [x]
* Configurar .gitignore [x]


## 🔐 FASE 1 — Autenticación (Better Auth)
* Crear /lib/auth [ ]
* Definir modelos User y Session [ ]
* Implementar auth.service.ts [ ]
* Manejo de cookies / sesión [ ]
* Endpoints: [ ]
* POST /api/auth/register [ ]
* POST /api/auth/login [ ]
* POST /api/auth/logout [ ]
* GET /api/auth/session [ ]
* Páginas /login y /register [ ]
* Proteger rutas privadas [ ]
* Login / logout funcionando [ ]


## 🗃️ FASE 2 — Base de datos (Turso + SQLite)
* Crear DB app-dev en Turso [ ]
* Crear DB app-prod en Turso [ ]
* Configurar .env.local [ ]
* Configurar envs en Vercel (Preview / Prod) [ ]
* Configurar ORM (Prisma o Drizzle) [ ]
* Definir schema: [ ]
* User [ ]
* Session [ ]
* Task [ ]
* Ejecutar migraciones en dev [ ]
* Ignorar DB local en Git [ ]


## 🧠 FASE 3 — Arquitectura backend
* Crear /repositories [ ]
* task.repository.ts [ ]
* Crear /services [ ]
* task.service.ts [ ]
* Confirmar separación: [ ]
* UI no accede a DB [ ]
* API no contiene reglas de negocio [ ]
* Services concentran la lógica [ ]


## ⚡ FASE 4 — Server Actions
* Crear /actions/task.actions.ts [ ]
* Acciones: [ ]
* Crear tarea [ ]
* Completar tarea [ ]
* Eliminar tarea [ ]
* Validar sesión en cada action [ ]
* Revalidar UI tras acciones [ ]


## 📄 FASE 5 — Server Components
* Crear /tasks/page.tsx [ ]
* Cargar tareas en Server Component [ ]
* Pasar datos por props [ ]
* Renderizar estados correctamente [ ]


## 🎨 FASE 6 — UI mínima
* Formulario crear tarea [ ]
* Lista de tareas [ ]
* Botón completar [ ]
* Botón eliminar [ ]
* Feedback básico (loading / error) [ ]


## 🧪 FASE 7 — Testing

### Setup
* Instalar runner (Vitest o Jest) [ ]
* Configurar entorno de tests [ ]
* Crear script test [ ]
* DB SQLite de test (ignoradas en Git) [ ]

### Tests de Services (prioridad)
* Crear tarea válida [ ]
* No crear tarea sin sesión [ ]
* Completar tarea [ ]
* No completar tarea de otro usuario [ ]
* Eliminar tarea [ ]

### Tests de Repositories
* Crear registro [ ]
* Obtener tareas por userId [ ]
* Actualizar estado [ ]

### Tests de Auth
* Registro correcto [ ]
* Password incorrecto [ ]
* Sesión inválida [ ]
* Logout invalida sesión [ ]

### No testear por ahora
* ❌ Componentes UI [ ]
* ❌ Estilos [ ]
* ❌ Server Components [ ]
* ❌ Internals de Next.js [ ]


## 🔒 FASE 8 — Seguridad
* Validar sesión en Server Actions [ ]
* Validar sesión en API Routes [ ]
* Verificar ownership de tareas [ ]
* Nunca confiar en IDs del cliente [ ]


## 🚀 FASE 9 — Deploy
* Push a dev [ ]
* Verificar Preview Deployment [ ]
* Probar login y tareas en preview [ ]
* Merge dev → main [ ]
* Deploy a producción [ ]
* Probar prod con DB prod [ ]


## 🧹 FASE 10 — Cierre
* Crear .env.example [ ]
* Revisar estructura [ ]
* Limpiar logs [ ]
* Verificar nombres [ ]
* Confirmar entendimiento del flujo [ ]
* README con instrucciones básicas [ ]

