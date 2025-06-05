
export enum ContactStatus {
  LEAD = 'Lead',
  CONTACTED = 'Contactado',
  SCHEDULED = 'Agendado',
  NEGOTIATION = 'Em Negociação',
  CONVERTED = 'Convertido',
  LOST = 'Perdido',
}

export interface Contact {
  id: string;
  name: string;
  whatsapp: string;
  email?: string;
  status: ContactStatus;
  createdAt: string;
  notes?: string;
}

export enum AppointmentStatus {
  SCHEDULED = 'Agendado',
  COMPLETED = 'Realizado',
  CANCELLED = 'Cancelado',
}

export interface Appointment {
  id: string;
  contactId: string;
  contactName?: string; 
  title: string;
  dateTime: string;
  notes?: string;
  status: AppointmentStatus;
}

export interface OfferTemplate {
  id: string;
  name: string;
  message: string;
}

export interface DigitalCardConfig {
  businessName: string;
  tagline?: string;
  whatsappNumber: string;
  whatsappPrefillMessage?: string;
  schedulingSystem: 'internal' | 'external';
  externalSchedulingLink?: string;
  logoUrl?: string; // e.g., picsum
  primaryColor: string;
  accentColor: string;
}

export interface SentOfferInfo {
  contactId: string;
  offerTemplateId: string;
  sentAt: string;
}
    