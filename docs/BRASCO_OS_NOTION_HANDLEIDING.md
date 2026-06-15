# Notion ↔ Brasco OS Handleiding

## Doel

Notion is de centrale inbox voor ideeen, notities en taken.

Brasco OS verwerkt deze automatisch naar het interne taaksysteem.

Workflow:

```txt
Notion Inbox
↓
Brasco OS Sync
↓
tasks.md
↓
Brasco OS Dashboard
```

## Structuur

### Notion Database

Naam:

```txt
Brasco OS Inbox
```

Velden:

| Veld | Type |
| --- | --- |
| Name | Title |
| Type | Select |
| Status | Select |
| Priority | Select |
| Due | Date |
| Brasco ID | Text |

### Type

```txt
Note
Task
Idea
Decision
```

### Status

```txt
New
Linked
Done
```

### Priority

```txt
Low
Normal
High
```

## Werkwijze

### Nieuwe invoer

Alle nieuwe informatie komt eerst in Notion.

Voorbeeld:

```txt
Name: Domeinonderzoek Waterstof
Type: Idea
Status: New
Priority: High
```

## Synchroniseren

Uitvoeren vanuit:

```txt
/Users/brascoholding/brasco-os
```

Veilige verbindingstest:

```bash
npm run notion:test
```

Inbox read-only controleren:

```bash
npm run notion:inbox
```

Echte synchronisatie uitvoeren:

```bash
npm run notion:sync
```

Brasco OS:

1. Leest records met `Status = New`
2. Maakt een `TASK-ID` aan
3. Schrijft naar `tasks.md`
4. Zet Notion op `Linked`
5. Schrijft `Brasco ID` terug

## Takenopslag

```txt
.brasco-private/tasks/tasks.md
```

## Controle

```bash
npm run notion:inbox
```

Verwachte uitkomst als alles verwerkt is:

```txt
Nieuwe Notion-items gevonden: 0
```

## Configuratie

```txt
.brasco-private/notion/config.json
```

Voorbeeldstructuur:

```json
{
  "notionToken": "...",
  "databaseId": "..."
}
```

Sla echte tokens alleen lokaal op in `.brasco-private/`. Deze map staat in `.gitignore`.

## Backups

```txt
.brasco-private/tasks/tasks.backup-before-notion.md
```

## Toekomstige uitbreidingen

### Fase 2

Sync-knop in Brasco OS.

### Fase 3

Watcher notificaties:

- Deadline vandaag
- High Priority taken
- Openstaande ideeen

### Fase 4

Commandor Router:

```txt
Note -> Archief
Idea -> Specialist Review
Task -> tasks.md
Decision -> Decision Log
```

## Huidige Status

Werkend:

- Notion API verbinding
- Inbox uitlezen
- TASK-ID generatie
- `tasks.md` schrijven
- Status `New` → `Linked`
- Brasco ID terugschrijven

Versie:

```txt
Brasco OS Notion Integration v1
Juni 2026
```
