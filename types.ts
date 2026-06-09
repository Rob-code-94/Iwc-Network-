import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  isError?: boolean;
}

export interface ContactFormState {
  name: string;
  email: string;
  company: string;
  message: string;
}

export type MobilityLevel = 'ambulatory' | 'wheelchair' | 'stretcher';

export interface NemtIntakeFormState {
  name: string;
  phone: string;
  email: string;
  medicaidId: string;
  mcoName: string;
  mobilityLevel: MobilityLevel;
  pickupAddress: string;
  destination: string;
  appointmentDate: string;
  appointmentTime: string;
  specialNeeds: string;
}