
// Added React import to resolve namespace error
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ImpactStat {
  value: string;
  label: string;
  description: string;
}