/**
 * OpenAPI 3.1 specification for the Flui demo Next.js app.
 * Hand-written to keep the template dependency-free.
 */

export const openApiSpec = {
  openapi: '3.1.0',
  info: {
    title: 'Flui Demo — Next.js 16',
    version: '1.0.0',
    description:
      'A minimal demo application deployed via Flui. Showcases health check, item CRUD, and OpenAPI documentation.',
  },
  servers: [{ url: '/', description: 'Current host' }],
  paths: {
    '/api/health': {
      get: {
        summary: 'Health check',
        description: 'Returns service liveness, version and uptime.',
        responses: {
          '200': {
            description: 'Service is healthy',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Health' },
              },
            },
          },
        },
      },
    },
    '/api/items': {
      get: {
        summary: 'List items',
        responses: {
          '200': {
            description: 'List of items',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    items: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/Item' },
                    },
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: 'Create an item',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: { $ref: '#/components/schemas/CreateItemRequest' },
            },
          },
        },
        responses: {
          '201': {
            description: 'Item created',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Item' },
              },
            },
          },
          '400': { description: 'Validation failed' },
        },
      },
    },
    '/api/items/{id}': {
      get: {
        summary: 'Get an item by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': {
            description: 'Item found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Item' },
              },
            },
          },
          '404': { description: 'Item not found' },
        },
      },
      delete: {
        summary: 'Delete an item by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'string' },
          },
        ],
        responses: {
          '200': { description: 'Item deleted' },
          '404': { description: 'Item not found' },
        },
      },
    },
  },
  components: {
    schemas: {
      Health: {
        type: 'object',
        properties: {
          status: { type: 'string', example: 'ok' },
          appName: { type: 'string' },
          version: { type: 'string' },
          uptime: { type: 'integer', description: 'Uptime in seconds' },
          timestamp: { type: 'string', format: 'date-time' },
        },
      },
      Item: {
        type: 'object',
        required: ['id', 'name', 'description', 'createdAt'],
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          description: { type: 'string' },
          createdAt: { type: 'string', format: 'date-time' },
        },
      },
      CreateItemRequest: {
        type: 'object',
        required: ['name', 'description'],
        properties: {
          name: { type: 'string', minLength: 1, maxLength: 100 },
          description: { type: 'string', minLength: 1, maxLength: 500 },
        },
      },
    },
  },
} as const;
