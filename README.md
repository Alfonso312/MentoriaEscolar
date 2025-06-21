# Proyecto de Mentoría Escolar

Este proyecto es una aplicación web para gestionar un programa de mentoría escolar, desarrollada con Spring Boot y React.

## Tecnologías Utilizadas

### Backend
- Spring Boot 3.2.3
- Spring Security
- Spring Data JPA
- H2 Database
- Maven

### Frontend
- React 18
- Tailwind CSS
- Framer Motion
- Axios

## Requisitos Previos

- Java 17 o superior
- Node.js 14 o superior
- npm 6 o superior
- Maven 3.6 o superior

## Instalación

### Backend

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd mentoria-escolar
```

2. Compilar el proyecto:
```bash
./mvnw clean install
```

3. Ejecutar la aplicación:
```bash
./mvnw spring-boot:run

El backend estará disponible en `http://localhost:8080`

### Frontend

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar la aplicación:
```bash
npm start
```

El frontend estará disponible en `http://localhost:3000`

## Características

- Gestión de estudiantes
- Sistema de mentoría
- Interfaz moderna y responsive
- Animaciones suaves
- Diseño adaptable a dispositivos móviles

## Estructura del Proyecto

```
mentoria-escolar/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── mentoria/
│   │   │           ├── config/
│   │   │           ├── controller/
│   │   │           ├── model/
│   │   │           └── repository/
│   │   └── resources/
│   └── test/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
├── pom.xml
└── package.json
```

## Configuración

### Base de Datos
La aplicación utiliza H2 Database en memoria. La consola H2 está disponible en:
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:mentoriadb`
- Usuario: `sa`
- Contraseña: `password`

### Seguridad
- Usuario por defecto: `admin`
- Contraseña por defecto: `admin`
