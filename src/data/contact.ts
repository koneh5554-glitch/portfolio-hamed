export interface ContactConfig {
  email: string;
  phone: string;
  phoneSecondary?: string;
  whatsappNumber: string; // international format e.g. "2250141467705"
  whatsappDisplay: string;
  location: string;
  cityOrigin: string;
  githubUrl: string;
  linkedinUrl: string;
  formProvider: 'web3forms' | 'formspree';
  web3formsAccessKey: string;
  formspreeEndpoint: string;
}

export const contactData: ContactConfig = {
  email: 'hamed.kone24@inphb.ci',
  phone: '+225 01 41 46 77 05',
  phoneSecondary: '+225 07 16 76 74 88',
  whatsappNumber: '2250141467705',
  whatsappDisplay: '+225 01 41 46 77 05 / 07 16 76 74 88',
  location: 'Yamoussoukro / Bouaké, Côte d\'Ivoire',
  cityOrigin: 'Bouaké',
  githubUrl: 'https://github.com/koneh5554-glitch',
  linkedinUrl: 'https://linkedin.com/in/hamed-kone-eit',
  
  // Configuration d'envoi Web3Forms
  formProvider: 'web3forms',
  web3formsAccessKey: 'YOUR_WEB3FORMS_ACCESS_KEY',
  formspreeEndpoint: 'https://formspree.io/f/your_form_id',
};
