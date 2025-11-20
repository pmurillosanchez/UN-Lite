# UN-Lite

UN-Lite es un backend **open-source** diseñado para ofrecer una implementación ligera, extensible y completamente modular de conceptos fundamentales de **Utility Network**, siguiendo estrictamente los principios de **Clean Architecture**. Su objetivo es servir como base sólida para futuros servicios, SDKs y aplicaciones basadas en redes utilitarias.

---

## 🚀 Objetivos del Proyecto

* Implementar un backend escalable y modular para gestión y análisis de redes.
* Ofrecer un diseño limpio basado en Clean Architecture.
* Separar completamente dominio, casos de uso, infraestructura y delivery.
* Proveer una API REST y un SDK para clientes externos.
* Mantener toda la solución libre de dependencias propietarias.
* Facilitar testing a todos los niveles (unitario, integración, E2E).

---

## 🧱 Arquitectura

El sistema está estructurado en **4 capas independientes**, siguiendo Clean Architecture:

### 1. **Domain Layer** (Núcleo)

Contiene toda la lógica empresarial.

* Entities: `Node`, `Edge`, `Network`.
* Value Objects: `Geometry`, `AssetType`.
* Domain Services: `TracingEngine`, `TopologyValidator`.

### 2. **Application Layer** (Casos de Uso)

Coordina operaciones del dominio.

* Use Cases: `CreateNode`, `AddEdge`, `RunTrace`, `ValidateNetwork`.
* DTOs.
* Ports (interfaces): `INetworkRepository`, `ILogger`, `IUnitOfWork`.

### 3. **Infrastructure Layer**

Implementaciones técnicas.

* Repositorios: PostGIS, InMemory.
* ORM: Prisma / Knex / TypeORM.
* Logging, EventBus, IdGenerator.

### 4. **Delivery / Interface Layer**

La entrada/salida del sistema.

* REST Controllers.
* SDK (npm).
* CLI.

---

## 📁 Estructura de Carpetas

```
src/
  domain/
    entities/
    value-objects/
    services/
    errors/
  application/
    use-cases/
    ports/
    dto/
  infrastructure/
    repositories/
      postgis/
      in-memory/
    adapters/
      logger/
      event-bus/
      id-generator/
    mappers/
  interface/
    http/
      controllers/
      middlewares/
    sdk/
    cli/
  config/
tests/
  unit/
  integration/
  e2e/
```

---

## 🌐 API (Entrega prevista)

Ejemplos de endpoints:

* `POST /nodes` – Crear un nodo.
* `POST /edges` – Añadir un tramo.
* `POST /trace` – Ejecutar un trazado.
* `GET /network/:id` – Obtener una red.

La API sigue principios REST y devuelve JSON.

---

## 📦 SDK (npm)

El SDK permitirá consumir la API sin boilerplate.
Ejemplo:

```ts
import { UnLite } from "unlite-sdk";

const client = new UnLite();

await client.nodes.create({
  id: "A1",
  geometry: { type: "Point", coordinates: [10, 20] }
});
```

---

## 🧪 Testing

El proyecto se desarrolla bajo TDD siempre que sea posible.

### Tipos de tests:

* **Unitarios**: dominio puro y casos de uso.
* **Integración**: repositorios PostGIS, adaptadores.
* **End-to-End**: API completa.

### Tecnologías sugeridas:

* Vitest o Jest.
* Supertest.
* Cypress para E2E (cuando exista frontend).

---

## 🗺️ Roadmap

### MVP (v0.1)

* Modelado básico de Node, Edge, Network.
* Repositorio InMemory.
* Trazado simple (DFS/BFS).
* Use cases iniciales.
* API mínima.

### v0.2

* Repositorio PostGIS.
* Más reglas topológicas.
* SDK inicial.

### v0.3

* Validación avanzada de red.
* CLI.

### v1.0

* Red completa con reglas configurables.
* Trazados avanzados (aislamiento, loops).
* Documentación completa.

---

## 🤝 Contribuir

Las contribuciones son bienvenidas.

Pasos básicos:

1. Haz un fork del repositorio.
2. Crea una rama (`feature/nueva-funcionalidad`).
3. Asegura que los tests pasan.
4. Abre un Pull Request.

---

## 📄 Licencia

MIT (100% open-source).

---

## 🧭 Contacto

Este proyecto está en desarrollo activo.

Para sugerencias o dudas: *abrir un issue en el repositorio.*

---

## 📋 8. Casos de Uso del Sistema

A continuación se presenta la lista de casos de uso principales que definen cómo interactúan los usuarios y sistemas con UN-Lite.

### **1. Crear Nodo (CreateNode)**

**Actor:** Usuario GIS / Sistema externo

* Registrar un nuevo nodo en la red.
* Validar geometría y atributos requeridos.
* Persistir en la base de datos.

### **2. Crear Tramo (AddEdge)**

**Actor:** Usuario GIS / Sistema de diseño

* Conectar dos nodos.
* Validar compatibilidad de activos.
* Garantizar continuidad topológica.

### **3. Ejecutar Trazado (RunTrace)**

**Actor:** Operador de red / Sistema IoT

* Obtener subred afectada por un fallo.
* Tipos: upstream, downstream, aislamiento, loops.
* Devolver elementos afectados.

### **4. Obtener Detalles de Red (GetNetwork)**

**Actor:** Aplicación web o móvil

* Recuperar nodos, tramos y metadatos de una red.
* Consultar estado actual.

### **5. Validar Red Completa (ValidateNetwork)**

**Actor:** Ingeniero de redes / Analista GIS

* Detectar errores de topología.
* Verificar duplicados, desconexiones y geometrías inválidas.

### **6. Importar Red (ImportNetwork)**

**Actor:** ETL / Sistemas externos

* Cargar datos desde CSV, GeoJSON u otras fuentes.
* Convertirlos al esquema oficial.
* Validar antes de persistir.

### **7. Exportar Red (ExportNetwork)**

**Actor:** Sistemas externos / Backups

* Exportar la red para análisis o interoperabilidad.
* Formatos: GeoJSON, CSV, GPKG (futuro).

### **8. Actualizar Estado de Elemento (UpdateStatus)**

**Actor:** Sensores IoT / Operadores

* Cambiar estado de válvula, interruptor o equipo.
* Recalcular trazados afectados.

### **9. Auditar Cambios (AuditLogs)**

**Actor:** Administradores

* Consultar histórico de operaciones.
* Identificar quién modificó qué.

### **10. Simular Escenarios (Simulation – Futuro)**

**Actor:** Ingeniero de planificación

* Probar cambios sin afectar la red real.
* Evaluar impacto de desconexiones o ampliaciones.

---
