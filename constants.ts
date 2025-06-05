
import { Contact, Appointment, OfferTemplate, DigitalCardConfig, ContactStatus, AppointmentStatus } from './types';

export const DEFAULT_DIGITAL_CARD_CONFIG: DigitalCardConfig = {
  businessName: "Seu Negócio Digital",
  tagline: "Soluções inovadoras para você!",
  whatsappNumber: "5511999998888",
  whatsappPrefillMessage: "Olá! Tenho interesse nos seus serviços.",
  schedulingSystem: 'internal',
  externalSchedulingLink: "",
  logoUrl: `https://picsum.photos/seed/${Math.random()}/100`,
  primaryColor: "#2563eb", // blue-600
  accentColor: "#10b981", // emerald-500
};

export const INITIAL_CONTACTS: Contact[] = [
  { id: crypto.randomUUID(), name: "Ana Silva", whatsapp: "5511987654321", email: "ana.silva@example.com", status: ContactStatus.LEAD, createdAt: new Date().toISOString(), notes: "Interessada no serviço X." },
  { id: crypto.randomUUID(), name: "Bruno Costa", whatsapp: "5521912345678", status: ContactStatus.CONTACTED, createdAt: new Date().toISOString() },
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  { id: crypto.randomUUID(), contactId: INITIAL_CONTACTS[0]?.id || '1', contactName: INITIAL_CONTACTS[0]?.name, title: "Reunião de Apresentação", dateTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(), status: AppointmentStatus.SCHEDULED, notes: "Discutir proposta." }
];

export const INITIAL_OFFER_TEMPLATES: OfferTemplate[] = [
  { id: crypto.randomUUID(), name: "Oferta de Boas-Vindas", message: "Olá [NOME_CLIENTE]! Como novo cliente, você tem 10% de desconto no seu primeiro serviço. Aproveite!" },
  { id: crypto.randomUUID(), name: "Promoção Mensal", message: "Olá [NOME_CLIENTE], este mês temos uma promoção especial no serviço Y. Confira!" },
];

export const WHATSAPP_BASE_URL = "https://wa.me/";
    