'use client';

import { useState, useRef } from 'react';
import { TYPES_ESPACE } from '@/types/space';

interface FormulaireData {
  titre: string;
  ville: string;
  quartier: string;
  type: string;
  prix: string;
  disponibleDe: string;
  description: string;
  whatsapp: string;
  equipements: string;
  regles: string;
}

const champVide: FormulaireData = {
  titre: '',
  ville: '',
  quartier: '',
  type: '',
  prix: '',
  disponibleDe: '',
  description: '',
  whatsapp: '',
  equipements: '',
  regles: '',
};

const MAX_IMAGES = 5;

export default function PublierPage() {
  const [form, setForm] = useState<FormulaireData>(champVide);
  const [erreurs, setErreurs] = useState<Partial<Record<keyof FormulaireData, string>>>({});
  const [aperçus, setAperçus] = useState<string[]>([]);
  const [nbFichiers, setNbFichiers] = useState(0);
  const inputFichiersRef = useRef<HTMLInputElement>(null);

  function maj(champ: keyof FormulaireData, valeur: string) {
    setForm((prev) => ({ ...prev, [champ]: valeur }));
    if (erreurs[champ]) {
      setErreurs((prev) => ({ ...prev, [champ]: undefined }));
    }
  }

  function onFichiersChange(e: React.ChangeEvent<HTMLInputElement>) {
    const fichiers = Array.from(e.target.files ?? []);
    const selection = fichiers.slice(0, MAX_IMAGES);
    setNbFichiers(selection.length);

    // Libérer les anciens object URLs
    aperçus.forEach((url) => URL.revokeObjectURL(url));

    const urls = selection.map((f) => URL.createObjectURL(f));
    setAperçus(urls);
  }

  function supprimerImage(index: number) {
    URL.revokeObjectURL(aperçus[index]);
    const nouveauxAperçus = aperçus.filter((_, i) => i !== index);
    setAperçus(nouveauxAperçus);
    setNbFichiers(nouveauxAperçus.length);
    // Réinitialiser l'input fichier si plus aucune image
    if (nouveauxAperçus.length === 0 && inputFichiersRef.current) {
      inputFichiersRef.current.value = '';
    }
  }

  function valider(): boolean {
    const nouveauxErreurs: Partial<Record<keyof FormulaireData, string>> = {};
    if (!form.titre.trim()) nouveauxErreurs.titre = 'Le titre est requis';
    if (!form.ville.trim()) nouveauxErreurs.ville = 'La ville est requise';
    if (!form.quartier.trim()) nouveauxErreurs.quartier = 'Le quartier est requis';
    if (!form.type) nouveauxErreurs.type = "Le type d'espace est requis";
    if (!form.prix || parseInt(form.prix) <= 0) nouveauxErreurs.prix = 'La contribution est requise';
    if (!form.description.trim()) nouveauxErreurs.description = 'La description est requise';
    if (!form.whatsapp.trim()) nouveauxErreurs.whatsapp = 'Le numéro WhatsApp est requis';
    setErreurs(nouveauxErreurs);
    return Object.keys(nouveauxErreurs).length === 0;
  }

  function soumettre(e: React.FormEvent) {
    e.preventDefault();
    if (!valider()) return;

    const labelType = TYPES_ESPACE.find((t) => t.valeur === form.type)?.label ?? form.type;

    const lignes = [
      `Bonjour, je souhaite proposer un espace sur Partagem :`,
      ``,
      `Titre : ${form.titre}`,
      `Ville : ${form.ville} — ${form.quartier}`,
      `Type : ${labelType}`,
      `Contribution : ${parseInt(form.prix).toLocaleString('fr-FR')} FCFA/mois`,
      form.disponibleDe
        ? `Disponible dès le : ${new Date(form.disponibleDe).toLocaleDateString('fr-FR')}`
        : '',
      ``,
      `Description : ${form.description}`,
      form.equipements.trim() ? `Équipements : ${form.equipements}` : '',
      form.regles.trim() ? `Règles : ${form.regles}` : '',
      nbFichiers > 0 ? `Photos : ${nbFichiers} photo(s) — je vous les envoie ici sur WhatsApp` : '',
      ``,
      `Mon numéro : ${form.whatsapp}`,
    ]
      .filter(Boolean)
      .join('\n');

    const url = `https://wa.me/22800000000?text=${encodeURIComponent(lignes)}`;
    window.open(url, '_blank');
  }

  function champClasse(champ: keyof FormulaireData) {
    return `w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 ${
      erreurs[champ]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500'
    }`;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Proposer un espace à partager</h1>
      <p className="mt-2 text-gray-500">
        Remplissez le formulaire ci-dessous. Votre message sera envoyé directement via WhatsApp.
      </p>

      <form className="mt-8 flex flex-col gap-6" onSubmit={soumettre} noValidate>

        {/* Titre */}
        <div>
          <label htmlFor="titre" className="mb-1.5 block text-sm font-medium text-gray-700">
            Titre de l&apos;annonce <span className="text-red-500">*</span>
          </label>
          <input
            id="titre"
            type="text"
            placeholder="Ex : Bureau moderne au centre-ville de Lomé"
            value={form.titre}
            onChange={(e) => maj('titre', e.target.value)}
            className={champClasse('titre')}
          />
          {erreurs.titre && <p className="mt-1 text-xs text-red-500">{erreurs.titre}</p>}
        </div>

        {/* Ville + Quartier */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="ville" className="mb-1.5 block text-sm font-medium text-gray-700">
              Ville <span className="text-red-500">*</span>
            </label>
            <input
              id="ville"
              type="text"
              placeholder="Ex : Lomé, Abidjan, Cotonou..."
              value={form.ville}
              onChange={(e) => maj('ville', e.target.value)}
              className={champClasse('ville')}
            />
            {erreurs.ville && <p className="mt-1 text-xs text-red-500">{erreurs.ville}</p>}
          </div>
          <div>
            <label htmlFor="quartier" className="mb-1.5 block text-sm font-medium text-gray-700">
              Quartier <span className="text-red-500">*</span>
            </label>
            <input
              id="quartier"
              type="text"
              placeholder="Ex : Tokoin, Cocody..."
              value={form.quartier}
              onChange={(e) => maj('quartier', e.target.value)}
              className={champClasse('quartier')}
            />
            {erreurs.quartier && <p className="mt-1 text-xs text-red-500">{erreurs.quartier}</p>}
          </div>
        </div>

        {/* Type */}
        <div>
          <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-gray-700">
            Type d&apos;espace <span className="text-red-500">*</span>
          </label>
          <select
            id="type"
            value={form.type}
            onChange={(e) => maj('type', e.target.value)}
            className={champClasse('type')}
          >
            <option value="">Sélectionner un type</option>
            {TYPES_ESPACE.map((t) => (
              <option key={t.valeur} value={t.valeur}>
                {t.label}
              </option>
            ))}
          </select>
          {erreurs.type && <p className="mt-1 text-xs text-red-500">{erreurs.type}</p>}
        </div>

        {/* Contribution + Disponible dès le */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="prix" className="mb-1.5 block text-sm font-medium text-gray-700">
              Contribution mensuelle <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="prix"
                type="number"
                min="0"
                placeholder="Ex : 50000"
                value={form.prix}
                onChange={(e) => maj('prix', e.target.value)}
                className={`${champClasse('prix')} pr-16`}
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
                FCFA
              </span>
            </div>
            {erreurs.prix && <p className="mt-1 text-xs text-red-500">{erreurs.prix}</p>}
          </div>
          <div>
            <label htmlFor="disponibleDe" className="mb-1.5 block text-sm font-medium text-gray-700">
              Disponible dès le
            </label>
            <input
              id="disponibleDe"
              type="date"
              value={form.disponibleDe}
              onChange={(e) => maj('disponibleDe', e.target.value)}
              className={champClasse('disponibleDe')}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            rows={4}
            placeholder="Décrivez votre espace : superficie, ambiance, conditions de partage..."
            value={form.description}
            onChange={(e) => maj('description', e.target.value)}
            className={champClasse('description')}
          />
          {erreurs.description && <p className="mt-1 text-xs text-red-500">{erreurs.description}</p>}
        </div>

        {/* Photos */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Photos de l&apos;espace
          </label>

          {/* Zone de dépôt */}
          <label
            htmlFor="images"
            className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border-2 border-dashed border-gray-200 bg-white px-4 py-8 text-center transition-colors hover:border-emerald-400 hover:bg-emerald-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-emerald-700">Cliquez pour choisir des photos</p>
              <p className="mt-1 text-xs text-gray-400">JPG, PNG, WEBP — jusqu&apos;à {MAX_IMAGES} photos</p>
            </div>
            <input
              id="images"
              ref={inputFichiersRef}
              type="file"
              accept="image/*"
              multiple
              className="sr-only"
              onChange={onFichiersChange}
            />
          </label>

          {/* Aperçus */}
          {aperçus.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {aperçus.map((url, i) => (
                <div key={i} className="group relative aspect-square overflow-hidden rounded-lg border border-gray-200">
                  {/* img natif pour les blob: URLs — Next.js Image ne supporte pas ce protocole */}
                  <img
                    src={url}
                    alt={`Photo ${i + 1}`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => supprimerImage(i)}
                    className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white opacity-0 transition-opacity group-hover:opacity-100"
                    aria-label={`Supprimer la photo ${i + 1}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {nbFichiers > 0 && (
            <p className="mt-2 text-xs text-gray-500">
              {nbFichiers} photo{nbFichiers > 1 ? 's' : ''} sélectionnée{nbFichiers > 1 ? 's' : ''} — elles seront envoyées sur WhatsApp après votre message.
            </p>
          )}
        </div>

        {/* Équipements */}
        <div>
          <label htmlFor="equipements" className="mb-1.5 block text-sm font-medium text-gray-700">
            Équipements
          </label>
          <input
            id="equipements"
            type="text"
            placeholder="Ex : Wi-Fi, Climatisation, Cuisine équipée..."
            value={form.equipements}
            onChange={(e) => maj('equipements', e.target.value)}
            className={champClasse('equipements')}
          />
          <p className="mt-1 text-xs text-gray-400">Séparez les équipements par des virgules</p>
        </div>

        {/* Règles de vie */}
        <div>
          <label htmlFor="regles" className="mb-1.5 block text-sm font-medium text-gray-700">
            Règles de vie
          </label>
          <input
            id="regles"
            type="text"
            placeholder="Ex : Non-fumeur, Pas d'animaux, Rentrée avant 22h..."
            value={form.regles}
            onChange={(e) => maj('regles', e.target.value)}
            className={champClasse('regles')}
          />
          <p className="mt-1 text-xs text-gray-400">Séparez les règles par des virgules</p>
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-gray-700">
            Votre numéro WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            id="whatsapp"
            type="tel"
            placeholder="Ex : 22891234567 (format international sans +)"
            value={form.whatsapp}
            onChange={(e) => maj('whatsapp', e.target.value)}
            className={champClasse('whatsapp')}
          />
          <p className="mt-1 text-xs text-gray-400">
            Format international sans le signe + (ex : 22890000000 pour le Togo)
          </p>
          {erreurs.whatsapp && <p className="mt-1 text-xs text-red-500">{erreurs.whatsapp}</p>}
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white shadow-md transition-colors hover:bg-emerald-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.76-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.139.564 4.147 1.549 5.887L.057 23.882a.5.5 0 0 0 .61.61l6.057-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.917 0-3.715-.504-5.271-1.385l-.371-.214-3.899.955.975-3.818-.228-.381A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
          Proposer mon espace via WhatsApp
        </button>
      </form>
    </div>
  );
}
