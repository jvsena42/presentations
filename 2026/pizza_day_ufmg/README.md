# Lightning no bolso — Pizza Day UFMG 2026

Apresentação HTML+CSS auto-contida sobre autocustódia Lightning no mobile, usando a Bitkit como case principal.

## Como abrir

**Opção 1 — direto no navegador (offline):**
```
Abra index.html no Firefox/Chrome/Safari.
```

**Opção 2 — servidor local (recomendado, garante todas as fontes):**
```bash
cd "2026/Pizza Day UFMG"
python3 -m http.server 8000
# → http://localhost:8000
```

## Atalhos de teclado

| Tecla                       | Ação                       |
|-----------------------------|----------------------------|
| `→` `Space` `PageDown`      | Próximo slide              |
| `←` `PageUp`                | Slide anterior             |
| `Home`                      | Primeiro slide             |
| `End`                       | Último slide               |
| `F`                         | Fullscreen on/off          |
| clique na metade direita    | Próximo slide              |
| clique na metade esquerda   | Slide anterior             |
| URL `#slide-N`              | Pular direto pro slide N   |

## Estrutura

```
.
├── index.html       # 27 slides
├── style.css        # tema Bitkit (light)
├── script.js        # navegação + progress bar
└── assets/
    ├── fonts/       # Inter (variável, latin + latin-ext)
    ├── img/         # logo Bitkit (SVG)
    └── qr/          # QR codes (GitHub, Bitkit, BH Bitdevs)
```
