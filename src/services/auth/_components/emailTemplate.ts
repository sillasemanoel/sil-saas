export function emailTemplate(url: string, email: string): string {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>Login com Link Mágico</h2>
      <p>Olá,</p>
      <p>Clique no link abaixo para fazer login.</p>
      <a href="${url}" style="display: inline-block; margin-top: 10px; padding: 10px 20px; color: white; background-color: #dc2626; text-decoration: none;">Clique aqui! :)</a>
      <p>Ou copie e cole o link no seu navegador:</p>
      <p style="color: #dc2626;">${url}</p>
      <p>Se você não solicitou este e-mail, por favor ignore.</p>
    </div>
  `;
}
