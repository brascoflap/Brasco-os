# Brasco Ecosystem Registry - Concept Domeinenverslag V1

**VOORBEHOUD — GOEDKEURING NODIG**

Dit domeinenverslag is voorlopig. Geen domein mag automatisch geregistreerd, verhuisd, gekoppeld, gepubliceerd of aangepast worden.

Standaardvelden:

```yaml
approval_status: needs_review
execution_allowed: no
goedkeuring_nodig: ja
```

## Kernregels

- Geen DNS-wijziging zonder goedkeuring.
- Geen hostingwijziging zonder goedkeuring.
- Geen redirect zonder goedkeuring.
- Geen publieke koppeling tussen domeinen zonder goedkeuring.
- Geen promotie zonder goedkeuring.
- Domeinen zijn netwerkpunten, geen losse websites.

## Domeinen

### h2-zutphen.nl

```yaml
approval_status: needs_review
execution_allowed: no
visibility: public
```

Doel: professionele landingspagina voor H2 Zutphen en toekomstige partnerinteresse.

Doelgroep: lokale bedrijven, partners, overheid, MKB, waterstofbetrokkenen.

Rol binnen netwerk: regionale ingang voor H2-thema, leadgeneratie en partnernetwerk.

Urgentie: hoog.

Risico: te vroeg publieke claims doen of contact/chatfunctie live zetten zonder opvolgproces.

Voorgestelde actie: conceptscope en contentstructuur beoordelen.

Goedkeuring nodig: ja.

### h2con.be

```yaml
approval_status: needs_review
execution_allowed: no
visibility: public
```

Doel: voorlopig H2-netwerkpunt voor kennis, verbinding of congresachtige positionering.

Doelgroep: waterstofsector, experts, bedrijven, regionale partners.

Rol binnen netwerk: mogelijke thematische hub of toegangspoort.

Urgentie: hoog.

Risico: onduidelijke positionering als functie niet scherp wordt gekozen.

Voorgestelde actie: functie bepalen voordat content of technische koppeling wordt gemaakt.

Goedkeuring nodig: ja.

### hp-hub.nl

```yaml
approval_status: needs_review
execution_allowed: no
visibility: public
```

Doel: hubfunctie binnen het bredere netwerk.

Doelgroep: partners, MKB, technische gebruikers of projectdeelnemers.

Rol binnen netwerk: mogelijk verzamelpunt voor projecten, partners of sectorinformatie.

Urgentie: medium.

Risico: overlap met Pipeline, Marketplace of H2 Hub als rol niet duidelijk is.

Voorgestelde actie: afbakenen of dit een partnerhub, projecthub of kennislaag wordt.

Goedkeuring nodig: ja.

### lohc.be

```yaml
approval_status: needs_review
execution_allowed: no
visibility: public
```

Doel: kennis- of marktpositie rond LOHC binnen waterstof.

Doelgroep: technische partijen, investeerders, MKB, onderzoekers.

Rol binnen netwerk: specialistisch H2-subdomein.

Urgentie: medium.

Risico: technische claims of marktinformatie moeten zorgvuldig onderbouwd worden.

Voorgestelde actie: eerst kennisbank- en bronstructuur bepalen.

Goedkeuring nodig: ja.

### Regionale hubs

```yaml
approval_status: needs_review
execution_allowed: no
visibility: public
```

Doel: regionale ingangen voor bedrijven, projecten en partners.

Doelgroep: MKB, gemeenten, lokale organisaties, regionale energiepartijen.

Rol binnen netwerk: lokale toegangspunten die hetzelfde ecosysteem voeden.

Urgentie: medium.

Risico: te veel losse hubs zonder centrale registry-koppeling.

Voorgestelde actie: eerst criteria voor regionale hubs vastleggen.

Goedkeuring nodig: ja.

### Toekomstige Brasco domeinen

```yaml
approval_status: needs_review
execution_allowed: no
visibility: private
```

Doel: toekomstige netwerkpunten voor nieuwe ideeen, sectoren, apps of businessmodellen.

Doelgroep: afhankelijk van domeinfunctie.

Rol binnen netwerk: later te bepalen.

Urgentie: laag tot medium.

Risico: domeinen registreren zonder functie, eigenaar of opvolgactie.

Voorgestelde actie: alleen als registry-object vastleggen onder `dream` of `planning`.

Goedkeuring nodig: ja.

## Domeinbesluitregels

Een domein mag pas naar uitvoering als alle punten zijn beoordeeld:

- Doel is duidelijk.
- Doelgroep is duidelijk.
- Netwerkrol is duidelijk.
- Visibility is gekozen.
- Eigenaar is bepaald.
- Relaties met andere objecten zijn benoemd.
- Risico is beoordeeld.
- `approval_status = approved`.
- `execution_allowed = yes`.

Tot die tijd blijft elk domein conceptueel.
