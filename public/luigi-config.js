Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: '/sampleapp.html#/sample1'
          },
          {
            pathSegment: 'sample2',
            label: 'Second',
            icon: 'paper-plane',
            viewUrl: '/sampleapp.html#/sample2'
          },
          {
            pathSegment: 'pareceDuro',
            label: 'Parece Duro',
            icon: 'customer',
            viewUrl: '/sampleapp.html#/pareceDuro'
          },
          {
            category: { label: 'Links', icon: 'cloud' },
            label: 'Luigi Project',
            externalLink: {
              url: 'https://luigi-project.io/'
            }
          },
          {
            category: 'Links',
            label: 'Vue.js',
            externalLink: {
              url: 'https://vuejs.org/'
            }
          }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi Vue ',
      logo: '/logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
