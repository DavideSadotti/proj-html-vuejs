var app = new Vue(
  {
    el: "#app",
    data: {
      navbar:[
        'Home',
        'About',
        'Services',
        'Blog',
        'Contact',
        'Portfolio'
      ],
      whatWeDo:[
        {
          image: 'img/group-1.png',
          title: 'Data Analysis',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.'
        },
        {
          image: 'img/group-2.png',
          title: 'SEO Optimization',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.'
        },
        {
          image: 'img/group-3.png',
          title: 'Security Data',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.'
        },
        {
          image: 'img/group-4.png',
          title: 'Branding Strategy',
          text: 'When, while the lovely valley teems with vapour around meand the meridian sun strike the upper surface.'
        }
      ],
      social:[
        'instagram',
        'linkedin-in',
        'facebook-f',
        'twitter'
      ],
      link:[
        'Services',
        'Contact',
        'Blog'
      ],
      resources:[
        'Art Design',
        'Computer',
        'IT News',
        'Networking',
        'Web Security'
      ],
      contact:{
          address: 'Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051',
          phone: '+99 (0) 101 0000 888',
          email: 'info@yourdomain.com'
        }
    },
    methods: {
      toCapitalize: function(name){
        return name.charAt(0).toUpperCase() + name.slice(1)
      }
    }
  }
);
