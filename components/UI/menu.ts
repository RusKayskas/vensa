export type TMenuLink = {
  to: string;
  name: string;
  hide?: boolean,
  submenu?: TMenuLink[];
};

type TMenu = {
  main: TMenuLink;
};

export const menu: TMenu[] = [
  {
    main: {
      to: '/',
      name: 'Маникюр',
      submenu: [
        {
          to: '/price',
          name: 'цены'
        },
        {
          to: '/portfolio',
          name: 'Работы'
        },
        {
          to: '/reviews',
          name: 'отзывы'
        },
        {
          to: '/masters',
          name: 'Мастера'
        },
        {
          to: '/contacts',
          name: 'Как добраться'
        },
        {
          to: '/howItWork',
          name: 'Как это работает',
          hide: true
        }
      ]
    }
  },
  {
    main: {
      to: '/pedicur',
      name: 'Педикюр',
      submenu: [
        {
          to: '/pedicur/price',
          name: 'цены1'
        },
        {
          to: '/pedicur/portfolio',
          name: 'Работы1'
        },
        {
          to: '/pedicur/reviews',
          name: 'отзывы1'
        },
        {
          to: '/pedicur/masters',
          name: 'Мастера1'
        },
        {
          to: '/pedicur/contacts',
          name: 'Как добраться1'
        }
      ]
    },
    
  },
  {
    main: {
      to: '/brovi',
      name: 'Брови',
      submenu: [
        {
          to: '/brovi/price',
          name: 'цены1'
        },
        {
          to: '/brovi/portfolio',
          name: 'Работы1'
        },
        {
          to: '/brovi/reviews',
          name: 'отзывы1'
        },
        {
          to: '/brovi/masters',
          name: 'Мастера1'
        },
        {
          to: '/brovi/contacts',
          name: 'Как добраться1'
        }
      ]
    },
    
  }
];


//астивный класс для линков menu and submenu
export const isLinkActive = (route: string, link: TMenuLink) => {
  if (route === link.to) {
    return true;
  }

  if (link.submenu) {
    for (const subLink of link.submenu) {
      if (isLinkActive(route, subLink)) {
        return true;
      }
    }
  }

  return false;
};