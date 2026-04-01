# MoO Design System Registry

> **DS File:** `IE52Pd1nEcinhqOlSy4efj` — Member Experience Design System
> **Icon File:** `PANnuPSeOJ5BkW3XDyt2RG` — Member Experience Iconography
> **Last Synced:** 2026-03-31

---

## Tokens

### Colors

| Token | Hex | Usage |
|---|---|---|
| `primary.blue-dark` | `#003A70` | Headlines, nav brand |
| `primary.blue` | `#105FA8` | Links, icons, buttons |
| `primary.teal` | `#03746E` | Gradient accent |
| `primary.white` | `#FFFFFF` | Backgrounds, inverse text |
| `grays.darkest` | `#222222` | Primary text |
| `grays.darker` | `#444444` | Secondary text |
| `grays.dark` | `#5D5D5D` | Muted text |
| `grays.gray` | `#838383` | Placeholders, labels |
| `grays.light` | `#BABABA` | Disabled states |
| `grays.lighter` | `#F0F0F0` | Light backgrounds, borders |
| `semantics.success` | `#1C9E3B` | Success |
| `semantics.pending` | `#FCBC0B` | Pending |
| `semantics.warning` | `#DF6903` | Warning |
| `semantics.info` | `#067AC1` | Information |
| `global.background` | `#F5F7FA` | Global background color (all pages) |
| Page bg (blue tint) | `#F4F9FD` | Leave pages |
| Card bg | `#FFFFFF` | Cards |
| Icon circle bg | `#ECF1F8` | Icon containers |
| Border | `#E0E0E0` | Card/section borders |

### Typography

| Token | Value |
|---|---|
| Font | Source Sans Pro |
| SemiBold | Headings, labels, buttons |
| Regular | Body text |
| Size 2xl | 40px (H1 page titles) |
| Size xl | 24px (H3 section headings) |
| Size lg | 20px (H4 sub-headings) |
| Size md | 18px (Brand name) |
| Size sm | 16px (Body, H5) |
| Size xs | 14px (Small body, descriptions) |
| Size 2xs | 12px (Labels, uppercase) |

### Spacing

| Token | Value |
|---|---|
| 2xs | 2px |
| xs | 4px |
| sm | 8px |
| md | 12px |
| lg | 16px |
| xl | 20px |
| 2xl | 24px |
| 3xl | 32px |
| 4xl | 48px |

### Other

| Token | Value |
|---|---|
| Card radius | 12px |
| Button/input radius | 4px |
| Pill radius | 56px |
| Card shadow | `0 4px 4px rgba(0,0,0,0.04)` |

---

## Components

### Component Sets (multi-variant)

| Component | Key | Variants |
|---|---|---|
| **Button** | `29a87d8813edfde38bd8fcf94195442b2af71ae9` | Primary/Secondary/Tertiary x Default/Focus/Error/Disabled + Inverse |
| **Pills** | `4d80082a0e910ac205fdd985d47d97f4ba30d15d` | Solid/Outline x Information/Alert/Tab/Pending/Error/Success |
| **Callout Card** | `946f4b571aaec979c6e304595fba7d4d24df8695` | Default, Quick Actions |
| **Stats Card** | `b46fb73ffaf298ae55cfe680805b56454dcb3faa` | Default, Simple |
| **Global Navigation** | `f91b91bf0a13b6eb143b2df64610ce130c1a59d5` | Default, Claims, Support, Coverages, Leave, Dental |
| **Mobile Navigation** | `d243cfc2a00b070b412e7b7c65832184a452a09c` | Default, Menu, Coverage, Leave, Dental |
| **Inline Message** | `6050d0dbdd157a37f9c136bdcbb805c378e681b2` | Success, Error, Warning, Information |
| **Mobile Inline Message** | `500ccf4b0eccf556286ee05e22fdfc6a27f2e87f` | Success, Error, Warning, Information |
| **Input** | `fdf3019206233a82f791780fb08ccde4f720cc74` | Default, Selected, Disabled, NoLine variants |
| **Form Field** | `f5f4d558f2876021b19079718064cacae6c0ed30` | Default, Hover, Disabled, Error |
| **Field Label** | `b804519ca75081fd08b8328d895bc8eed7f61e04` | Bold x Info x Required combos |
| **Dropdown** | `13bfb1299f81528dead3948193cd25a75cfbcec7` | Default, Focus, Disabled, Error |
| **Picklist** | `fd75e21ba391c5afa2403f90b0181e6f585c0a87` | Standard/Chevron x Default/Hover/Selected |
| **Progress Bar** | `a50e081508479874c55c256c301d3897551abdf0` | 25, 50, 75, 100 |
| **Activity Row** | `9d1abd79050ce4a4db5aef0ecaa9207ea7fa8a51` | Information, Pending, Success, Needs Attention |
| **Mobile Activity Row** | `7e3dec748b5582fa08297d6465dcbcbca7b7f1e9` | Info, Pending, Success, Needs Attention |
| **Insurance ID Card** | `c4ba5901942de7352e59497f2156b401c8ea26cc` | Front, Back |
| **Navigation Tabs** | `922cc017127226e1a599a37f9679027ceab9767e` | Default, Selected, Hover |
| **Sidebar Row** | *(query from DS file)* | Default, Last, Dropdown |
| **Tabs** | *(query from DS file)* | Default, Hover, Selected |
| **Recent Activity - Desktop** | `0c94d5b65a0530b555b873fb1aa95893389e335c` | No Activity, Recent Activity |
| **Recent Activity - Mobile** | *(query from DS file)* | No Activity, Recent Activity |
| **Brand Header** | `5ff19e33bb072b1ec1b147f76abeb9b9f701b660` | Default, Co-Branded |
| **Mutual of Omaha Logo** | `0d41ca3957a6a576f893d06941b5a81b22bf2b18` | Black, Blue, White |
| **MyMutual Logo** | `dd906f18429e43215997625906eecd6c65b8407a` | Black, White, 2Color |
| **Utility Links** | `d553562efdad641380adea92dcd47152c933d1ab` | Profile, Sign In, Notification, Default, Hover |
| **Toggle** | *(query from DS file)* | Default, Variant2 |

### Frequently Used Variant Keys

| Component | Variant | Key |
|---|---|---|
| Button / Primary Default | `Property 1=Primary, Property 2=Default` | `d1d04fcb94dcaf2767abffcc5865587f022ad96f` |
| Button / Secondary Default | `Property 1=Secondary, Property 2=Default` | `3bab126ed6a1c8ec97af4dc7f0340b7b51d09746` |
| Button / Tertiary Default | `Property 1=Tertiary, Property 2=Default` | `9a221b243d14f643473a6bc85630a79bab09989b` |
| Button / Primary Disabled | `Property 1=Primary, Property 2=Disabled` | `fd5838e748e778534e47b0ba2a5a69dba4f144d3` |
| Pills / Solid Information | | `44ffbd079bfc835edf3081b211164223bf0aff32` |
| Pills / Solid Success | | `1302ed9d17a516c6558f4442b81ebfbe514aed96` |
| Pills / Solid Pending | | `9371e791da2659648b883a4309ee19baff591cec` |
| Pills / Solid Error | | `704b942d2bda6e09f1d73a99b0606091ed774b88` |
| Pills / Solid Alert | | `82e2ec084152be0734cb30b13e70d48a8b7bd7d7` |
| Callout Card / Default | | `670b7eb2d3a371519c0ac225e7f4e498541092ce` |
| Callout Card / Quick Actions | | `d28889c0e43d9832ad926939356f99ea6c188a77` |
| Mobile Navigation / Default | | `36d0d4d66b9291e16d250cf158043894872a0b28` |
| Mobile Navigation / Leave | | `e6cb4bae16f8352b246022beab23dbf6d58d8919` |

### Standalone Components

| Component | Key |
|---|---|
| **Footer** | `fbbf6289d9402f13aa676dddaad9daacdda4def2` |
| **Mobile Footer** | `32490bd4d62aeb356a229b178bde0eb272077b62` |
| **Mobile Callout Card** | `e5ae86a2b95f2f0beefda6181c2fae88fd7afb01` |
| **Plan Cards** | `dbc64eba2f905e86944e26756d4cbc043de9153b` |
| **Quick Actions** | `94155fba1a857d61ab43cd99bc6c79ae0e018c04` |
| **Mobile Quick Actions** | `63f75c88b27809ce5abe5dd524613e5c80207f77` |
| **Tabs Header** | `908757a971ae98baca002254b9f888052de13f45` |
| **Sidebar Header** | `1680ab8f65a5865e443c74666d229a046e3099ee` |
| **Logo Stacked** | `f84e8773c904faddf7c4689d4f6d40b5578f6f77` |
| **Main Navigation** | `39a5df6183a5fdef9cdc1fd95a4bf7285d4d34d7` |
| **Secondary Navigation** | `6313fda76d05a5a7e272d8dd47b7747f0f469283` |
| **Input Label** | `137fe78bcb3d980d8553bb71512774d278e332a1` |
| **Field Label / Error** | `c498dfbcca985a98a7a19f4c359767257332db5e` |
| **Mobile Header Nav** | `9305ff075fd7dc391315543bac2fe80b4c7fc287` |
| **Mobile Navigation Back** | `fd62db2cc8116628281a1bd18490f95e589fe49b` |

---

## Icons (from `PANnuPSeOJ5BkW3XDyt2RG`)

629 icons across 27 categories. Import via `figma.importComponentByKeyAsync(key)`.

### Frequently Used

| Icon | Key |
|---|---|
| Pencil Alternate | `8ae4e12cc9fcd6c053b7870f79126cb25b2c6480` |
| Chevron Right | `cd3035722136900b015edef45658ae705c449586` |
| Chevron Down | `b6ec5fbb277dbcd2420ac9c391aacc6ac1044b6b` |
| Chevron Left | `12ba8076becec65b69c230d7f4663fe7c03a3615` |
| Chevron Up | `f896fa136faa2c6575f8fb5665df62e2fdbcddc4` |
| Chevron Circle Right | `e1c921d35fe5552ba04f7ccde4dcfc8183ee0e61` |
| Check Circle | `01ed98d4a25e578b3de49f610ba7f12ec2d4c562` |
| Check Circle Outline | `7193740c53e40a7968d2b9281a28089ae544d254` |
| Info Circle | `d1b036f6328fb4cc5d65a1290d54f9417dc2629a` |
| Search | `4a55124301954d9354c13d1f2cc5feb57d95b5ae` |
| Bell Outline | `0bf1e9945acb31bdf9ae04b01802872b39645280` |
| User Circle Outline | `3b5f6563781a50958d1776b37519e8f712d68322` |
| ID Card Outline | `92516f2dd7dc49badb3d858784347f240dd28ccf` |
| File Alternate Outline | `c8fe68f40e5f902e50a03b839212d5598d8315c4` |
| Folder Open Outline | `3bf9307b12a98e93ba6e5b88d4bf859b294fe981` |
| Comment | `fc6d815f66a73954cf0addff55291057f73342bb` |
| Clock Outline | `88cd78aefc2a6ba9ade1197a448f57633950d4c0` |
| Tooth | `05439d85e4e84e6ef8dce5565e7643f2b75305d8` |
| Copy | *(in Stats Card Simple instance)* |

### Categories (629 total)

Accessibility (16), Arrows (104), Audio & Video (37), Business (74), Chess (9), Code (24), Communication (15), Computers (14), Currency (11), Date & Time (16), Design (14), Editors (25), Files (16), Genders (13), Hands & Gestures (18), Health (17), Interfaces (45), Logistics (10), Maps (43), Objects (13), Payments & Shopping (12), Spinners (2), Sports (11), Status (32), Users & People (15), Vehicles (12), Writing (8)

To find a specific icon key, search the icon file by name pattern (e.g., `"Health / heartbeat"`).
