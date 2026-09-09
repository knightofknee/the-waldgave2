import Head from 'next/head'
import Link from 'next/link'

export default function DirectDemocracySoporte() {
  return (
    <div className="container">
      <Head>
        <title>Soporte: direct democracy</title>
        <meta name="description" content="Ayuda para direct democracy: cómo verificarte, cambiar el idioma, recuperar tu cuenta o eliminarla, y cómo contactarnos." />
      </Head>
      <h1>Soporte</h1>
      <p className="subtitle">direct democracy</p>
      <p className="updated">Última actualización: 9 de septiembre de 2026</p>

      <div className="content">
        <p><strong>App:</strong> direct democracy: Chicago</p>
        <p><strong>Desarrollador:</strong> Brian Carlisle, The Waldgrave</p>

        <h2>Contacto</h2>
        <p>Escríbenos a <a href="mailto:bricarlis@gmail.com">bricarlis@gmail.com</a>. Puedes escribir en español o en inglés. Incluye tu nombre visible en la app y, si es un error, qué hiciste justo antes de que ocurriera y en qué teléfono lo viste.</p>

        <h2>Cambiar el idioma</h2>
        <p>La app pregunta tu idioma la primera vez que la abres. Para cambiarlo después: pestaña <strong>perfil</strong>, luego <strong>Ajustes</strong>, luego <strong>Idioma</strong>. Las declaraciones de los candidatos se muestran en el idioma en que fueron escritas; no las traducimos.</p>

        <h2>Verificación</h2>
        <p>Verificarte significa confirmar que eres un adulto residente de un distrito de Chicago, nada más. No tiene que ver con tu registro electoral ni con tu partido. La verificación la hace Didit, un servicio independiente de identidad. Tu identificación y tu dirección van a Didit, nunca a nosotros; lo único que recibimos es un sí o no y tu distrito.</p>
        <p>Para verificarte: pestaña <strong>perfil</strong>, luego <strong>Verificar mi identidad</strong>. Si la verificación falla, revisa que la identificación esté vigente, que la foto sea legible y que la dirección esté dentro de Chicago. Si sigue fallando, escríbenos.</p>

        <h2>No puedo iniciar sesión</h2>
        <p>En la pantalla de inicio de sesión usa <strong>&quot;Email me a sign-in link&quot;</strong> para recibir un enlace de acceso por correo, o restablece tu contraseña. Revisa la carpeta de correo no deseado si el mensaje no llega en unos minutos.</p>

        <h2>Eliminar mi cuenta</h2>
        <p>Pestaña <strong>perfil</strong>, luego <strong>Ajustes</strong>, luego <strong>Delete account</strong> (eliminar cuenta). La eliminación es inmediata y no se puede deshacer. Los pasos completos y lo que se borra están en <Link href="/directdemocracy/delete-account">la página de eliminación de cuenta</Link> (en inglés).</p>

        <h2>Reportar contenido</h2>
        <p>Abre el comentario, la preocupación o la pregunta y usa la opción de reportar. También puedes bloquear a un usuario desde su comentario. Revisamos cada reporte.</p>

        <h2>Errores en los datos electorales</h2>
        <p>Los directorios de candidatos, jueces y distritos se compilan de fuentes públicas y se revisan cada semana. Si ves un candidato que ya no está en la boleta, un dato incorrecto o un enlace roto, escríbenos con el nombre de la carrera y lo que está mal.</p>

        <h2>Privacidad y términos</h2>
        <p>La <Link href="/directdemocracy/privacy">política de privacidad</Link> y los <Link href="/directdemocracy/terms">términos de servicio</Link> están disponibles en inglés.</p>
      </div>

      <footer className="footer">
        <Link href="/directdemocracy/es">direct democracy</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/privacy">Política de privacidad</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/delete-account">Eliminar cuenta</Link>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          padding: 2em;
          color: #2c3e50;
        }
        h1 {
          text-align: center;
          font-weight: normal;
          margin-bottom: 0.1em;
        }
        .subtitle {
          text-align: center;
          color: #41B6E6;
          font-size: 1.1em;
          margin-bottom: 0.25em;
        }
        .updated {
          text-align: center;
          color: #999;
          font-size: 0.85em;
          margin-bottom: 2em;
        }
        .content h2 {
          font-size: 1.15em;
          margin-top: 1.5em;
          color: #2c3e50;
        }
        .content p,
        .content li {
          line-height: 1.6;
          text-align: left;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 0.9em;
        }
        .divider {
          margin: 0 0.75em;
          color: #ccc;
        }
      `}</style>
    </div>
  )
}
