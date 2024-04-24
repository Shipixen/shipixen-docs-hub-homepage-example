import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: 'd7825fa7-5183-4d22-8e32-93d65c123e61',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: '4329aefd-c222-4fce-a3ce-d85a24edb204',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
