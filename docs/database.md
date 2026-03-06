# Base de données — Partagem

## État actuel (MVP)

Aucune base de données. Les données sont mock dans `src/lib/mock/spaces.ts`.

## Schéma prévu : table `espaces`

```sql
CREATE TABLE espaces (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titre       TEXT NOT NULL,
  type        TEXT NOT NULL CHECK (type IN ('bureau', 'salle', 'entrepot', 'parking', 'terrain', 'autre')),
  ville       TEXT NOT NULL,
  prix        INTEGER NOT NULL CHECK (prix >= 0),  -- en FCFA
  description TEXT NOT NULL,
  whatsapp    TEXT NOT NULL,                        -- format: 22890000000
  images      TEXT[] DEFAULT '{}',                  -- URLs Supabase Storage
  publie      BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT now(),
  updated_at  TIMESTAMPTZ DEFAULT now()
);
```

## Index

```sql
-- Recherche par type
CREATE INDEX idx_espaces_type ON espaces(type);

-- Recherche par ville
CREATE INDEX idx_espaces_ville ON espaces(ville);

-- Tri par date de publication
CREATE INDEX idx_espaces_created_at ON espaces(created_at DESC);
```

## Notes sur Row Level Security (RLS)

À activer après ajout de l'authentification.

```sql
-- Activer RLS
ALTER TABLE espaces ENABLE ROW LEVEL SECURITY;

-- Lecture publique : tout le monde peut voir les espaces publiés
CREATE POLICY "lecture publique" ON espaces
  FOR SELECT USING (publie = true);

-- Écriture : seul le propriétaire peut modifier son espace
-- (nécessite colonne owner_id UUID REFERENCES auth.users)
CREATE POLICY "modification proprietaire" ON espaces
  FOR ALL USING (auth.uid() = owner_id);
```

## Évolution du schéma

| Version | Ajout |
|---------|-------|
| MVP     | Table `espaces` basique |
| v1.1    | Colonne `owner_id` + RLS |
| v1.2    | Table `reservations` |
| v1.3    | Table `avis` + colonne `note_moyenne` |

## Types correspondants TypeScript

Voir `src/types/space.ts` — les types doivent rester synchronisés avec ce schéma.
