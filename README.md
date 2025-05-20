# Discord Bot Template
- Template básico para bots de Discord usando Node.js e Discord.js (v14)

## Instalação
- Antes de prosseguir, certifique-se de que o [git](https://git-scm.com/downloads) e o [node.js](https://nodejs.org/) estejam instalados em sua máquina;
- Use o `git clone` para clonar o repositório:
```bash
git clone https://github.com/Andr3Dav1d/discord-bot-template.git && cd discord-bot-template
```
- Após clonar o repositório, instale as dependências necessárias:
```bash
npm install
```

## Configuração
Alguns arquivos precisam ser modificados para o funcionamento correto da aplicação.
- Em `.env`, insira o token do seu bot, como mostrado em **.env.example**:
```env
DISCORD_TOKEN=insira_seu_token_aqui
```
- Em `config.json`, insira os dados necessários para comandos de desenvolvimento e log _(caso preferir que os logs sejam enviados em um servidor do Discord através de um webhook)_, como mostrado em **config.json.example**:
```json
{
    "devs": ["",""], // Insira os IDs das pessoas que estão na equipe de desenvolvimento da sua aplicação
    "clientId": "", // Insita o ID da aplicação
    "sendWebhooks": false, // Mude para 'true' se quiser que os logs sejam enviados em uma Webhook
    "webhookURL": "" // Insira a URL do Webhook aqui (isso só funcionará se 'sendWebhooks' for 'true')
}
```