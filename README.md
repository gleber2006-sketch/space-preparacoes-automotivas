# Space Preparações Automotivas — projeto local

Versão local do site publicado em:

https://space-preparacoes.calmmoose5.chatgpt.site/

## Arquivos

Os arquivos do site foram recuperados do cache autenticado do Chrome e localizados para funcionar sem internet:

- `index.html` — HTML original do site.
- `style.css` — CSS original (`style.css` do site publicado).
- `app.js` — JavaScript original (`app.js?v=7`).
- `assets/engine-sequence/first.jpg` — quadro inicial.
- `assets/engine-sequence/last.jpg` — quadro final.
- `assets/engine-sequence/sequence.mp4` — vídeo original da animação (139 quadros, 5,79 s, 1280×720).
- `assets/engine-sequence/config.json` — configuração original da sequência.
- `assets/end.webp` — imagem da seção "A essência Space".
- `fonts.css` e `fonts/` — Barlow e Barlow Condensed localizadas (Google Fonts).

Os scripts da plataforma ChatGPT (widget de modo anônimo e desafio Cloudflare) não fazem parte do site e foram removidos. Eles dependem do ambiente autenticado do `chatgpt.site`.

## Como abrir

O vídeo é carregado via `fetch`, então não abra o `index.html` diretamente como `file://`. Use um servidor estático:

```powershell
python -m http.server 5500
```

Depois acesse:

http://localhost:5500/

## WhatsApp

O formulário usa `window.SPACE_WHATSAPP_NUMBER`, exatamente como no site original. No original o número não está definido, então o link abre o WhatsApp sem destinatário. Para definir um número, adicione antes de `app.js`:

```html
<script>window.SPACE_WHATSAPP_NUMBER = '5511999999999';</script>
```

## Arquivos legados

`styles.css` e `script.js` pertencem à reconstrução anterior e não são mais usados pelo `index.html`.
