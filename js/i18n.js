const SUPPORTED_LANGS = ['de', 'fr', 'it', 'en'];
const DEFAULT_LANG = 'de';

const translations = {
    de: {
        langSwitcherLabel: 'Sprachauswahl',
        descriptionHeadingOne: 'Integrales Management',
        descriptionHeadingTwo: 'Natürliche Ressourcen',
        descriptionLineTwo: 'Nategra gestaltet die natürliche Umwelt. Dafür entwickeln wir Grundlagen für ein ganzheitliches Verständnis und einen sorgsamen Umgang mit den natürlichen Ressourcen.',
        descriptionLineThree: 'Integrales Management natürlicher Ressourcen bedeutet, Natur als ein ökologisches System aus vielfältigen Arten, Lebensräumen und Beziehungen zu verstehen, das eine Vielzahl menschlicher Nutzungen ermöglicht.',
        descriptionHeadingThree: 'Naturalytics',
        descriptionLineFour: 'Mithilfe von Daten und Modellen bilden wir ökologische Systeme auf Grundlage wissenschaftlicher Erkenntnisse ab und machen so natürliche Ressourcen sichtbar und verständlich.',
        referencesHeading: 'Naturbasierte Lösungen',
        referencesText: 'Nategra durfte bereits unterschiedlichste Sichtweisen auf natürliche Ressourcen in konkrete Umsetzungen überführen.',
        contactHeading: 'Kontakt',
        companyName: 'Nategra GmbH',
        addressStreet: 'Nydeggstalden 30',
        addressCity: '3011 Bern',
        addressCountry: 'Schweiz',
        impressumLink: 'Impressum',
        impressumHeading: 'Impressum',
        impressumClose: 'Schliessen',
        impressumBody: `
<p><strong>Verantwortliche Stelle</strong><br>
Nategra GmbH<br>
Nydeggstalden 30<br>
CH-3011 Bern<br>
Schweiz<br>
E-Mail: <a href="mailto:info@nategra.ch">info@nategra.ch</a></p>

<p><strong>Unternehmensinformationen</strong><br>
Gesellschaft mit beschränkter Haftung (GmbH)<br>
UID: CHE-408.302.501<br>
Handelsregisteramt des Kantons Bern<br>
Handelsregister-Nr.: CH-036.4.060.360-6</p>

<p><strong>Haftungsausschluss</strong><br>
Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt. Dennoch wird keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen übernommen.</p>

<p><strong>Urheberrechte</strong><br>
Sämtliche Inhalte und Werke auf dieser Website unterliegen dem Urheberrecht. Die Verwendung, Vervielfältigung oder Weitergabe von Inhalten und Bildern bedarf der vorgängigen schriftlichen Zustimmung der Nategra GmbH.</p>`,
        privacyLink: 'Datenschutzerklärung',
        privacyHeading: 'Datenschutzerklärung',
        privacyClose: 'Schliessen',
        privacyBody: `
<p><strong>Verantwortliche Stelle</strong><br>
Nategra GmbH<br>
Nydeggstalden 30<br>
3011 Bern<br>
Schweiz<br>
E-Mail: <a href="mailto:info@nategra.ch">info@nategra.ch</a></p>

<p><strong>Erhobene Daten</strong><br>
Diese Website verwendet keine Cookies, keine Analyse- oder Tracking-Dienste und keine Formulare zur Erfassung personenbezogener Daten.</p>

<p>Beim Aufruf der Website werden durch den Hosting-Anbieter technisch notwendige Verbindungsdaten verarbeitet. Dazu gehören insbesondere:</p>

<ul>
<li>IP-Adresse</li>
<li>Datum und Uhrzeit des Zugriffs</li>
<li>aufgerufene Datei bzw. Seite</li>
<li>Informationen zum verwendeten Browser und Betriebssystem</li>
</ul>

<p>Diese Daten dienen ausschliesslich dem technischen Betrieb sowie der Sicherheit und Stabilität der Website.</p>

<p><strong>Hosting</strong><br>
Die Website wird über GitHub Pages betrieben, einen Dienst der GitHub, Inc., USA. Dabei können technische Zugriffsdaten auf Servern ausserhalb der Schweiz verarbeitet werden. Einzelheiten zur Datenbearbeitung durch GitHub finden Sie in der <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">Datenschutzerklärung von GitHub</a>.</p>

<p><strong>Rechtsgrundlage</strong><br>
Die Bearbeitung der Daten erfolgt auf Grundlage des berechtigten Interesses am sicheren und zuverlässigen Betrieb der Website gemäss Art. 31 Abs. 1 revDSG.</p>

<p><strong>Speicherdauer</strong><br>
Die Website wird statisch über GitHub Pages ausgeliefert. Nategra betreibt selbst keine Server und speichert keine Zugriffsdaten. Die Speicherdauer technischer Server-Protokolle richtet sich nach der <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">Datenschutzerklärung von GitHub</a>.</p>

<p><strong>Rechte der betroffenen Personen</strong><br>
Sie haben nach dem schweizerischen Datenschutzrecht insbesondere das Recht auf Auskunft über die zu Ihrer Person bearbeiteten Daten sowie gegebenenfalls auf Berichtigung oder Löschung.</p>

<p>Bei Fragen zum Datenschutz können Sie sich an <a href="mailto:info@nategra.ch">info@nategra.ch</a> wenden.</p>`
    },
    fr: {
        langSwitcherLabel: 'Sélection de la langue',
        descriptionHeadingOne: 'Gestion intégrale',
        descriptionHeadingTwo: 'Ressources naturelles',
        descriptionLineTwo: 'Nategra façonne l’environnement naturel. Pour ce faire, nous développons les fondements d’une compréhension globale et d’une gestion respectueuse des ressources naturelles.',
        descriptionLineThree: 'La gestion intégrale des ressources naturelles signifie appréhender la nature comme un système écologique composé d’espèces, d’habitats et de relations variés, qui permet une multitude d’usages humains.',
        descriptionHeadingThree: 'Naturalytics',
        descriptionLineFour: 'À l’aide de données et de modèles, nous représentons les systèmes écologiques sur la base de connaissances scientifiques et rendons ainsi les ressources naturelles visibles et compréhensibles.',
        referencesHeading: 'Solutions fondées sur la nature',
        referencesText: 'Nategra a déjà eu l’occasion de traduire les perspectives les plus diverses sur les ressources naturelles en réalisations concrètes.',
        contactHeading: 'Contact',
        companyName: 'Nategra Sàrl',
        addressStreet: 'Nydeggstalden 30',
        addressCity: '3011 Berne',
        addressCountry: 'Suisse',
        impressumLink: 'Mentions légales',
        impressumHeading: 'Mentions légales',
        impressumClose: 'Fermer',
        impressumBody: `
<p><strong>Responsable</strong><br>
Nategra Sàrl<br>
Nydeggstalden 30<br>
CH-3011 Berne<br>
Suisse<br>
E-mail&nbsp;: <a href="mailto:info@nategra.ch">info@nategra.ch</a></p>

<p><strong>Informations sur l'entreprise</strong><br>
Société à responsabilité limitée (Sàrl)<br>
N° IDE&nbsp;: CHE-408.302.501<br>
Office du registre du commerce du canton de Berne<br>
N° d'enregistrement au registre du commerce&nbsp;: CH-036.4.060.360-6</p>

<p><strong>Clause de non-responsabilité</strong><br>
Les contenus de ce site web sont élaborés avec le plus grand soin. Toutefois, aucune garantie n'est donnée quant à l'exactitude, l'exhaustivité et l'actualité des informations fournies.</p>

<p><strong>Droits d'auteur</strong><br>
L'ensemble des contenus et des œuvres figurant sur ce site web sont protégés par le droit d'auteur. L'utilisation, la reproduction ou la diffusion de contenus et d'images nécessitent l'accord écrit préalable de Nategra Sàrl.</p>`,
        privacyLink: 'Politique de confidentialité',
        privacyHeading: 'Politique de confidentialité',
        privacyClose: 'Fermer',
        privacyBody: `
<p><strong>Responsable du traitement</strong><br>
Nategra Sàrl<br>
Nydeggstalden 30<br>
3011 Berne<br>
Suisse<br>
E-mail&nbsp;: <a href="mailto:info@nategra.ch">info@nategra.ch</a></p>

<p><strong>Données collectées</strong><br>
Ce site web n'utilise ni cookies, ni services d'analyse ou de suivi, ni formulaires destinés à la collecte de données à caractère personnel.</p>

<p>Lors de la consultation du site web, les données de connexion techniquement nécessaires sont traitées par l'hébergeur. Il s'agit notamment&nbsp;:</p>

<ul>
<li>de l'adresse IP</li>
<li>de la date et de l'heure de l'accès</li>
<li>du fichier ou de la page consultée</li>
<li>des informations relatives au navigateur et au système d'exploitation utilisés</li>
</ul>

<p>Ces données servent exclusivement au fonctionnement technique ainsi qu'à la sécurité et à la stabilité du site web.</p>

<p><strong>Hébergement</strong><br>
Le site web est hébergé via GitHub Pages, un service de GitHub, Inc., États-Unis. Dans ce cadre, des données techniques d'accès peuvent être traitées sur des serveurs situés en dehors de la Suisse. Pour plus de détails sur le traitement des données par GitHub, veuillez consulter la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">politique de confidentialité de GitHub</a>.</p>

<p><strong>Base juridique</strong><br>
Le traitement des données repose sur l'intérêt légitime à un fonctionnement sûr et fiable du site web, conformément à l'art. 31, al. 1, de la LPD révisée.</p>

<p><strong>Durée de conservation</strong><br>
Le site est diffusé de manière statique via GitHub Pages. Nategra n'exploite pas de serveurs et ne conserve aucune donnée d'accès. La durée de conservation des journaux techniques du serveur est régie par la <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">politique de confidentialité de GitHub</a>.</p>

<p><strong>Droits des personnes concernées</strong><br>
Conformément à la législation suisse sur la protection des données, vous disposez notamment d'un droit d'accès aux données traitées vous concernant ainsi que, le cas échéant, d'un droit de rectification ou d'effacement.</p>

<p>Pour toute question relative à la protection des données, vous pouvez vous adresser à <a href="mailto:info@nategra.ch">info@nategra.ch</a>.</p>`
    },
    it: {
        langSwitcherLabel: 'Selezione della lingua',
        descriptionHeadingOne: 'Gestione integrale',
        descriptionHeadingTwo: 'Risorse naturali',
        descriptionLineTwo: 'Nategra plasma l\'ambiente naturale. A tal fine, sviluppiamo le basi per una comprensione olistica e una gestione attenta delle risorse naturali.',
        descriptionLineThree: 'Una gestione integrale delle risorse naturali significa comprendere la natura come un sistema ecologico costituito da una grande varietà di specie, habitat e relazioni, che consente una moltitudine di utilizzi da parte dell\'uomo.',
        descriptionHeadingThree: 'Naturalytics',
        descriptionLineFour: 'Con l\'ausilio di dati e modelli, rappresentiamo i sistemi ecologici sulla base delle conoscenze scientifiche, rendendo così le risorse naturali visibili e comprensibili.',
        referencesHeading: 'Soluzioni basate sulla natura',
        referencesText: 'Nategra ha già avuto modo di tradurre prospettive molto diverse sulle risorse naturali in realizzazioni concrete.',
        contactHeading: 'Contatto',
        companyName: 'Nategra Sagl',
        addressStreet: 'Nydeggstalden 30',
        addressCity: '3011 Berna',
        addressCountry: 'Svizzera',
        impressumLink: 'Note legali',
        impressumHeading: 'Note legali',
        impressumClose: 'Chiudi',
        impressumBody: `
<p><strong>Titolare del trattamento</strong><br>
Nategra Sagl<br>
Nydeggstalden 30<br>
CH-3011 Berna<br>
Svizzera<br>
E-mail: <a href="mailto:info@nategra.ch">info@nategra.ch</a></p>

<p><strong>Informazioni sulla società</strong><br>
Società a garanzia limitata (Sagl)<br>
N. IDI: CHE-408.302.501<br>
Ufficio del Registro di commercio del Cantone di Berna<br>
Numero di registro di commercio: CH-036.4.060.360-6</p>

<p><strong>Esclusione di responsabilità</strong><br>
I contenuti del presente sito web sono redatti con la massima cura possibile. Tuttavia, non si assume alcuna garanzia per la correttezza, la completezza e l'attualità delle informazioni fornite.</p>

<p><strong>Diritti d'autore</strong><br>
Tutti i contenuti e le opere presenti su questo sito web sono soggetti al diritto d'autore. L'utilizzo, la riproduzione o la diffusione di contenuti e immagini richiedono il previo consenso scritto di Nategra Sagl.</p>`,
        privacyLink: 'Informativa sulla privacy',
        privacyHeading: 'Informativa sulla privacy',
        privacyClose: 'Chiudi',
        privacyBody: `
<p><strong>Titolare del trattamento</strong><br>
Nategra Sagl<br>
Nydeggstalden 30<br>
3011 Berna<br>
Svizzera<br>
E-mail: <a href="mailto:info@nategra.ch">info@nategra.ch</a></p>

<p><strong>Dati raccolti</strong><br>
Questo sito web non utilizza cookie, né servizi di analisi o tracciamento, né moduli per la raccolta di dati personali.</p>

<p>Quando si accede al sito web, il provider di hosting elabora i dati di connessione tecnicamente necessari. Tra questi figurano in particolare:</p>

<ul>
<li>Indirizzo IP</li>
<li>Data e ora dell'accesso</li>
<li>File o pagina visitata</li>
<li>Informazioni sul browser e sul sistema operativo utilizzati</li>
</ul>

<p>Tali dati servono esclusivamente al funzionamento tecnico, nonché alla sicurezza e alla stabilità del sito web.</p>

<p><strong>Hosting</strong><br>
Il sito web è gestito tramite GitHub Pages, un servizio di GitHub, Inc., USA. In questo contesto, i dati tecnici di accesso possono essere trattati su server situati al di fuori della Svizzera. Per maggiori dettagli sul trattamento dei dati da parte di GitHub, si rimanda all'<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">Informativa sulla privacy di GitHub</a>.</p>

<p><strong>Base giuridica</strong><br>
Il trattamento dei dati avviene sulla base del legittimo interesse al funzionamento sicuro e affidabile del sito web ai sensi dell'art. 31 cpv. 1 nLPD.</p>

<p><strong>Durata della conservazione</strong><br>
Il sito è distribuito in modo statico tramite GitHub Pages. Nategra non gestisce server propri e non memorizza dati di accesso. La durata di conservazione dei log tecnici del server è disciplinata dall'<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">Informativa sulla privacy di GitHub</a>.</p>

<p><strong>Diritti degli interessati</strong><br>
Ai sensi della legislazione svizzera sulla protezione dei dati, avete in particolare il diritto di ottenere informazioni sui dati trattati che vi riguardano, nonché, se del caso, il diritto alla rettifica o alla cancellazione.</p>

<p>Per domande relative alla protezione dei dati potete rivolgervi a <a href="mailto:info@nategra.ch">info@nategra.ch</a>.</p>`
    },
    en: {
        langSwitcherLabel: 'Language selection',
        descriptionHeadingOne: 'Integrated Management',
        descriptionHeadingTwo: 'Natural Resources',
        descriptionLineTwo: 'Nategra shapes the natural environment. To this end, we develop the foundations for a holistic understanding and the careful stewardship of natural resources.',
        descriptionLineThree: 'Integrated management of natural resources means understanding nature as an ecological system composed of diverse species, habitats, and relationships that enables a wide range of human uses.',
        descriptionHeadingThree: 'Naturalytics',
        descriptionLineFour: 'Using data and models, we map ecological systems on the basis of scientific evidence, making natural resources visible and understandable.',
        referencesHeading: 'Nature-Based Solutions',
        referencesText: 'Nategra has already had the opportunity to translate a wide range of perspectives on natural resources into concrete implementations.',
        contactHeading: 'Contact',
        companyName: 'Nategra LLC',
        addressStreet: 'Nydeggstalden 30',
        addressCity: '3011 Bern',
        addressCountry: 'Switzerland',
        impressumLink: 'Legal Notice',
        impressumHeading: 'Legal Notice',
        impressumClose: 'Close',
        impressumBody: `
<p><strong>Responsible Party</strong><br>
Nategra LLC<br>
Nydeggstalden 30<br>
CH-3011 Bern<br>
Switzerland<br>
Email: <a href="mailto:info@nategra.ch">info@nategra.ch</a></p>

<p><strong>Company Information</strong><br>
Limited Liability Company (LLC)<br>
UID: CHE-408.302.501<br>
Commercial Registry Office of the Canton of Bern<br>
Commercial Registry No.: CH-036.4.060.360-6</p>

<p><strong>Disclaimer</strong><br>
The content of this website is prepared with the utmost care. However, no warranty is provided for the accuracy, completeness, or timeliness of the information provided.</p>

<p><strong>Copyright</strong><br>
All content and works on this website are subject to copyright. The use, reproduction, or distribution of content and images requires the prior written consent of Nategra LLC.</p>`,
        privacyLink: 'Privacy Policy',
        privacyHeading: 'Privacy Policy',
        privacyClose: 'Close',
        privacyBody: `
<p><strong>Data Controller</strong><br>
Nategra LLC<br>
Nydeggstalden 30<br>
3011 Bern<br>
Switzerland<br>
Email: <a href="mailto:info@nategra.ch">info@nategra.ch</a></p>

<p><strong>Data Collected</strong><br>
This website does not use cookies, analytics or tracking services, or forms to collect personal data.</p>

<p>When you visit the website, the hosting provider processes technically necessary connection data. This includes, in particular:</p>

<ul>
<li>IP address</li>
<li>Date and time of access</li>
<li>File or page accessed</li>
<li>Information about the browser and operating system used</li>
</ul>

<p>This data is used exclusively for the technical operation, security, and stability of the website.</p>

<p><strong>Hosting</strong><br>
The website is operated via GitHub Pages, a service provided by GitHub, Inc., USA. In this context, technical access data may be processed on servers located outside of Switzerland. For details on data processing by GitHub, please refer to the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Statement</a>.</p>

<p><strong>Legal Basis</strong><br>
Data processing is based on the legitimate interest in the secure and reliable operation of the website in accordance with Art. 31 para. 1 revDSG.</p>

<p><strong>Retention Period</strong><br>
The website is served statically via GitHub Pages. Nategra does not operate any servers itself and does not store access data. The retention period for technical server logs is governed by the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Statement</a>.</p>

<p><strong>Rights of Data Subjects</strong><br>
Under Swiss data protection law, you have the right to access information about the data processed regarding you, as well as the right to have such data corrected or deleted, where applicable.</p>

<p>If you have any questions regarding data protection, please contact <a href="mailto:info@nategra.ch">info@nategra.ch</a>.</p>`
    }
};

function applyLang(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (dict[key] !== undefined) {
            el.setAttribute('aria-label', dict[key]);
        }
    });
    document.querySelectorAll('.reference-item figcaption').forEach((el) => {
        const caps = el._captions;
        if (!caps) return;
        setCaptionContent(el, caps[lang] || caps[DEFAULT_LANG] || '');
    });
}
