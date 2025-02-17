import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'UnitedStatesBankCardsWiki',
  description: 'From ITIN to SSN, from B/F/J/H/L/O Visa to Green Card/Citizen, we all have legal pathway to U.S. Bank services such as checking account, debit card and credit card.',
  base: '/UnitedStatesBankCardsWiki/',
  themeConfig: {
    nav: [
      { text: 'vitepress Example', link: '/vitepressExample' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'vitepress Example', link: '/vitepressExample' },
          // ...
        ],
      },
    ],
  },
});
