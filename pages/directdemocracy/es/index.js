import Head from 'next/head'
import Link from 'next/link'

export default function DirectDemocracyEs() {
  return (
    <div className="container">
      <Head>
        <title>direct democracy: la voz cívica de Chicago</title>
        <meta name="description" content="Un tablero de las preocupaciones de toda la ciudad, votaciones por distrito y AMAs donde la comunidad decide si los oficiales realmente respondieron." />
        <link rel="alternate" hrefLang="en" href="https://www.waldgrave.com/directdemocracy" />
        <link rel="alternate" hrefLang="es" href="https://www.waldgrave.com/directdemocracy/es" />
      </Head>
      <h1>direct democracy</h1>
      <p className="tagline">La voz cívica de Chicago: un tablero de las preocupaciones de toda la ciudad, votaciones por distrito y AMAs donde la comunidad decide si los oficiales realmente respondieron.</p>

      <div className="features">
        <div className="feature">
          <h3>El tablero</h3>
          <p>Plantea los temas que importan y vótalos por prioridad, de crítico a bajo, para clasificar lo que le importa a toda la ciudad. Cada resultado muestra el voto general y el voto verificado lado a lado.</p>
        </div>
        <div className="feature">
          <h3>Tu distrito</h3>
          <p>Explora cualquiera de los 50 distritos. Verifícate una vez como residente y tus votos cuentan en los conteos verificados de tu distrito, incluidas las preguntas de tu concejal.</p>
        </div>
        <div className="feature">
          <h3>Respuestas reales</h3>
          <p>Pregúntale lo que sea a los oficiales. La comunidad, nunca el político, juzga si una respuesta contestó la pregunta, y cada oficial lleva una boleta de calificaciones pública.</p>
        </div>
        <div className="feature">
          <h3>Anónimo por diseño</h3>
          <p>La verificación de identidad la hace un tercero; la app solo sabe si estás verificado y tu distrito. Tu nombre real nunca se muestra.</p>
        </div>
        <div className="feature">
          <h3>Toda la boleta</h3>
          <p>Las elecciones del 3 de noviembre de 2026 y del 23 de febrero de 2027: candidatos, jueces, distritos legislativos y consejos de distrito policial, con fechas y lugares para votar.</p>
        </div>
        <div className="feature">
          <h3>En español</h3>
          <p>La app pregunta tu idioma la primera vez que la abres y puedes cambiarlo cuando quieras en Ajustes. Las declaraciones de los candidatos se muestran en su idioma original.</p>
        </div>
      </div>

      <div className="cta">
        <p>Disponible para iOS y Android</p>
      </div>

      <footer className="footer">
        <Link href="/directdemocracy/es/soporte">Soporte</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/privacy">Política de privacidad</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/terms">Términos de servicio</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy">English</Link>
        <p className="credit">A Waldgrave Production</p>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 2em;
          text-align: center;
          color: #2c3e50;
        }
        h1 {
          font-size: 2.5em;
          font-weight: normal;
          margin-bottom: 0.25em;
        }
        .tagline {
          font-size: 1.1em;
          color: #666;
          margin-bottom: 2em;
        }
        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5em;
          justify-content: center;
          margin: 2em 0;
        }
        .feature {
          flex: 1 1 300px;
          max-width: 340px;
          padding: 1.25em;
          border: 1px solid #eee;
          border-radius: 12px;
          text-align: left;
        }
        .feature h3 {
          margin-top: 0;
          color: #0B4A6F;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .feature p {
          line-height: 1.55;
          margin-bottom: 0;
        }
        .cta {
          margin: 2em 0;
          color: #C8102E;
          font-weight: 600;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          font-size: 0.9em;
        }
        .divider {
          margin: 0 0.75em;
          color: #ccc;
        }
        .credit {
          color: #999;
          font-size: 0.85em;
          margin-top: 1em;
        }
      `}</style>
    </div>
  )
}
