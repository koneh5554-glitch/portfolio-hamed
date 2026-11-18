export interface ContactConfig {
  email: string;
  phone: string;
  whatsappNumber: string; // international format e.g. "22500000000"
  whatsappDisplay: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  // Provider d'envoi pour le formulaire : 'web3forms' | 'formspree'
  formProvider: 'web3forms' | 'formspree';
  // Clé d'accès gratuite Web3Forms (obtenable gratuitement sur web3forms.com en 10 secondes)
  // Ou Formspree Form ID (formspree.io)
  web3formsAccessKey: string;
  formspreeEndpoint: string;
}

export const contactData: ContactConfig = {
  // Renseignez ici vos informations réelles dès que souhaité
  email: 'hamed.kone.eit@gmail.com',
  phone: '+225 07 00 00 00 00',
  whatsappNumber: '2250700000000',
  whatsappDisplay: '+225 07 00 00 00 00',
  location: 'Yamoussoukro / Abidjan, Côte d\'Ivoire',
  githubUrl: 'https://github.com/konehamed',
  linkedinUrl: 'https://linkedin.com/in/hamed-kone',
  
  // Configuration du formulaire de contact fonctionnel
  formProvider: 'web3forms',
  // Clé par défaut pré-configurée (peut être remplacée par votre propre clé gratuite obtenue sur web3forms.com)
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  formspreeEndpoint: 'https://formspree.io/f/your_form_id',
};
