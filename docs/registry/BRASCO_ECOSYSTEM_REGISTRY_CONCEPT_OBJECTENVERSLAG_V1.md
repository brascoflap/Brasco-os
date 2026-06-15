# Brasco Ecosystem Registry - Concept Objectenverslag V1

**VOORBEHOUD — GOEDKEURING NODIG**

Dit objectenverslag is voorlopig. Objecten mogen zichtbaar worden gemaakt in de registry, maar niet automatisch uitgevoerd worden.

Standaardvelden:

```yaml
approval_status: needs_review
execution_allowed: no
goedkeuring_nodig: ja
```

## Kernregels

- Alles is een object.
- Alles heeft een spoor.
- Alles is scanbaar.
- Geen object wordt automatisch een taak.
- Geen publieke scanpagina zonder goedkeuring.
- Geen QR-code publiek gebruiken zonder goedkeuring.
- Geen koppelingen tussen objecten activeren zonder goedkeuring.

## Basis Objectschema

```yaml
brasco_id: BRA-TYPE-0000
type: idea | task | domain | app | plugin | ai_tool | server | business_model | pipeline | h2 | promotion
layer: dream | planning | execution | reality | archived
status: concept
qr_code_url: pending
public_scan_url: pending
visibility: private | internal | public
parent_item_id: null
related_item_ids: []
trace_origin_id: null
trace_stage: dream | planning | execution | reality | archived
trace_notes: ""
approval_status: needs_review
execution_allowed: no
goedkeuring_nodig: ja
```

## Conceptobjecten

### BRA-REG-0001 - Brasco Ecosystem Registry

```yaml
brasco_id: BRA-REG-0001
type: registry
layer: execution
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-REG-0001
visibility: internal
parent_item_id: null
related_item_ids:
  - BRA-TRACE-0001
  - BRA-DOMARCH-0001
trace_origin_id: BRA-REG-0001
trace_stage: execution
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: ontstaan vanuit behoefte aan centrale bron van waarheid.

Goedkeuring nodig: ja.

### BRA-TRACE-0001 - Brasco Trace System

```yaml
brasco_id: BRA-TRACE-0001
type: trace_system
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-TRACE-0001
visibility: internal
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-REG-0001
trace_origin_id: BRA-REG-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: toegevoegd als basisprincipe voor scanbare objectidentiteit.

Goedkeuring nodig: ja.

### BRA-DOMARCH-0001 - Domein Architectuur

```yaml
brasco_id: BRA-DOMARCH-0001
type: architecture
layer: execution
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-DOMARCH-0001
visibility: internal
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-DOM-0001
  - BRA-DOM-0002
  - BRA-DOM-0003
  - BRA-DOM-0004
trace_origin_id: BRA-REG-0001
trace_stage: execution
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: domeinen worden gezien als netwerkpunten, niet losse websites.

Goedkeuring nodig: ja.

### BRA-DOM-0001 - h2-zutphen.nl

```yaml
brasco_id: BRA-DOM-0001
type: domain
layer: execution
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-DOM-0001
visibility: public
parent_item_id: BRA-DOMARCH-0001
related_item_ids:
  - BRA-H2-0001
  - BRA-PROMO-0001
trace_origin_id: BRA-DOMARCH-0001
trace_stage: execution
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: onderdeel van H2 landing en partnernetwerk.

Goedkeuring nodig: ja.

### BRA-DOM-0002 - h2con.be

```yaml
brasco_id: BRA-DOM-0002
type: domain
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-DOM-0002
visibility: public
parent_item_id: BRA-DOMARCH-0001
related_item_ids:
  - BRA-H2-0001
trace_origin_id: BRA-DOMARCH-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: mogelijk thematisch H2-netwerkpunt.

Goedkeuring nodig: ja.

### BRA-DOM-0003 - hp-hub.nl

```yaml
brasco_id: BRA-DOM-0003
type: domain
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-DOM-0003
visibility: public
parent_item_id: BRA-DOMARCH-0001
related_item_ids:
  - BRA-PIPE-0001
  - BRA-MKT-0001
trace_origin_id: BRA-DOMARCH-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: mogelijke hubfunctie binnen netwerk.

Goedkeuring nodig: ja.

### BRA-DOM-0004 - lohc.be

```yaml
brasco_id: BRA-DOM-0004
type: domain
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-DOM-0004
visibility: public
parent_item_id: BRA-DOMARCH-0001
related_item_ids:
  - BRA-H2-0001
  - BRA-KNOW-0001
trace_origin_id: BRA-DOMARCH-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: specialistisch H2/LOHC kennisobject.

Goedkeuring nodig: ja.

### BRA-PIPE-0001 - Pipeline

```yaml
brasco_id: BRA-PIPE-0001
type: pipeline
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-PIPE-0001
visibility: public
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-PIPE-0002
  - BRA-PIPE-0003
trace_origin_id: BRA-REG-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: concept om mensen via vragen te verbinden.

Goedkeuring nodig: ja.

### BRA-PIPE-0002 - Pipeline Card Systeem

```yaml
brasco_id: BRA-PIPE-0002
type: app_module
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-PIPE-0002
visibility: public
parent_item_id: BRA-PIPE-0001
related_item_ids:
  - BRA-TRACE-0001
trace_origin_id: BRA-PIPE-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: digitale visitekaart met scanbare QR-identiteit.

Goedkeuring nodig: ja.

### BRA-PIPE-0003 - Pipeline Vraagmodel

```yaml
brasco_id: BRA-PIPE-0003
type: workflow
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-PIPE-0003
visibility: internal
parent_item_id: BRA-PIPE-0001
related_item_ids:
  - BRA-PIPE-0002
trace_origin_id: BRA-PIPE-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: vraag -> expert -> gesprek -> oplossing.

Goedkeuring nodig: ja.

### BRA-H2-0001 - H2 Structuur

```yaml
brasco_id: BRA-H2-0001
type: h2
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-H2-0001
visibility: internal
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-DOM-0001
  - BRA-DOM-0002
  - BRA-H2RADAR-0001
  - BRA-H2MARKET-0001
trace_origin_id: BRA-REG-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: ordening van waterstofsector in registry-categorieen.

Goedkeuring nodig: ja.

### BRA-H2RADAR-0001 - H2 Radar

```yaml
brasco_id: BRA-H2RADAR-0001
type: knowledge_feed
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-H2RADAR-0001
visibility: internal
parent_item_id: BRA-H2-0001
related_item_ids:
  - BRA-KNOW-0001
trace_origin_id: BRA-H2-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: geen traditionele feed, wel relevante ontwikkelingen en kansen.

Goedkeuring nodig: ja.

### BRA-H2MARKET-0001 - H2 Market

```yaml
brasco_id: BRA-H2MARKET-0001
type: market_analysis
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-H2MARKET-0001
visibility: internal
parent_item_id: BRA-H2-0001
related_item_ids: []
trace_origin_id: BRA-H2-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: inzicht in grote spelers en marktbewegingen voor MKB.

Goedkeuring nodig: ja.

### BRA-APP-0001 - Brasco App

```yaml
brasco_id: BRA-APP-0001
type: app
layer: dream
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-APP-0001
visibility: internal
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-PIPE-0001
  - BRA-H2RADAR-0001
  - BRA-MKT-0001
trace_origin_id: BRA-REG-0001
trace_stage: dream
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: mobiele toegang tot ecosysteemmodules.

Goedkeuring nodig: ja.

### BRA-AI-0001 - AI Tool Registry

```yaml
brasco_id: BRA-AI-0001
type: ai_tool_registry
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-AI-0001
visibility: internal
parent_item_id: BRA-REG-0001
related_item_ids: []
trace_origin_id: BRA-REG-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: overzicht van agents, automatiseringen, prompts, workflows en analyses.

Goedkeuring nodig: ja.

### BRA-SRV-0001 - Promotion Server

```yaml
brasco_id: BRA-SRV-0001
type: server
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-SRV-0001
visibility: internal
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-PROMO-0001
trace_origin_id: BRA-REG-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: conceptserver voor distributie, SEO en projectpromotie.

Goedkeuring nodig: ja.

### BRA-PROMO-0001 - Promotie Structuur

```yaml
brasco_id: BRA-PROMO-0001
type: promotion
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-PROMO-0001
visibility: internal
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-SRV-0001
  - BRA-DOMARCH-0001
trace_origin_id: BRA-REG-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: structuur voor promotie, maar zonder automatische publicatie.

Goedkeuring nodig: ja.

### BRA-MKT-0001 - Marketplace

```yaml
brasco_id: BRA-MKT-0001
type: marketplace
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-MKT-0001
visibility: public
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-PIPE-0001
trace_origin_id: BRA-REG-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: MKB zichtbaar maken op kwaliteit.

Goedkeuring nodig: ja.

### BRA-KNOW-0001 - Kennisbank

```yaml
brasco_id: BRA-KNOW-0001
type: knowledge_base
layer: planning
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-KNOW-0001
visibility: public
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-H2-0001
trace_origin_id: BRA-REG-0001
trace_stage: planning
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: open kennis delen, maar publicatie alleen na goedkeuring.

Goedkeuring nodig: ja.

### BRA-DTWIN-0001 - Digital Twin

```yaml
brasco_id: BRA-DTWIN-0001
type: visualization
layer: dream
status: concept
qr_code_url: pending
public_scan_url: /registry/BRA-DTWIN-0001
visibility: internal
parent_item_id: BRA-REG-0001
related_item_ids:
  - BRA-TRACE-0001
trace_origin_id: BRA-REG-0001
trace_stage: dream
approval_status: needs_review
execution_allowed: no
```

Trace-spoor: levende visuele weergave van registry-objecten.

Goedkeuring nodig: ja.

## Besluitregel

Een object mag pas naar uitvoering als:

```yaml
approval_status: approved
execution_allowed: yes
```

Tot dat moment blijft het object conceptueel, zichtbaar en traceerbaar, maar niet uitvoerend.
