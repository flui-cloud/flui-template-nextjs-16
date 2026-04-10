import { itemStore } from '@/lib/store';

export const dynamic = 'force-dynamic';

export default async function HomePage(): Promise<React.ReactElement> {
  const items = itemStore.list();
  const appName = process.env.APP_NAME ?? 'Flui Demo Next.js';
  const version = process.env.APP_VERSION ?? '1.0.0';

  return (
    <main
      style={{
        maxWidth: 800,
        margin: '0 auto',
        padding: '4rem 2rem',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          padding: '0.4rem 0.9rem',
          borderRadius: '999px',
          background: 'linear-gradient(135deg, #4f9eff, #a855f7)',
          color: '#fff',
          fontSize: '0.8rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
        }}
      >
        🚀 Flui Demo Application
      </div>

      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        {appName}
      </h1>
      <p style={{ color: '#888', marginBottom: '2rem' }}>
        Next.js 16 · App Router · Standalone build · v{version}
      </p>

      <div
        style={{
          background: '#15151c',
          border: '1px solid #2a2a35',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '2rem',
        }}
      >
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          API Endpoints
        </h2>
        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.5rem' }}>
          <li>
            <code style={codeStyle}>GET</code>{' '}
            <a href="/api/health">/api/health</a> — service health
          </li>
          <li>
            <code style={codeStyle}>GET</code>{' '}
            <a href="/api/items">/api/items</a> — list items
          </li>
          <li>
            <code style={codeStyle}>POST</code> <span>/api/items</span> —
            create item
          </li>
          <li>
            <code style={codeStyle}>GET</code>{' '}
            <a href="/api/openapi">/api/openapi</a> — OpenAPI spec
          </li>
          <li>
            <code style={codeStyle}>GET</code> <a href="/docs">/docs</a> —
            Swagger UI
          </li>
        </ul>
      </div>

      <div
        style={{
          background: '#15151c',
          border: '1px solid #2a2a35',
          borderRadius: '12px',
          padding: '1.5rem',
        }}
      >
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          Items ({items.length})
        </h2>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: '0.75rem 0',
              borderBottom: '1px solid #2a2a35',
            }}
          >
            <div style={{ fontWeight: 600 }}>{item.name}</div>
            <div style={{ color: '#888', fontSize: '0.9rem' }}>
              {item.description}
            </div>
          </div>
        ))}
      </div>

      <footer
        style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #2a2a35',
          color: '#666',
          fontSize: '0.85rem',
          textAlign: 'center',
        }}
      >
        Powered by{' '}
        <a href="https://flui.cloud" style={{ color: '#4f9eff' }}>
          Flui
        </a>
      </footer>
    </main>
  );
}

const codeStyle: React.CSSProperties = {
  display: 'inline-block',
  background: '#2a2a35',
  color: '#4f9eff',
  padding: '0.1rem 0.4rem',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 600,
  marginRight: '0.4rem',
};
