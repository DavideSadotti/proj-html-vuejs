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
